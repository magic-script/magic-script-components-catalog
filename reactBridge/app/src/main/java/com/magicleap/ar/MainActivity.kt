package com.magicleap.ar

import android.app.Activity
import android.app.ActivityManager
import android.content.Context
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.widget.Toast
import com.google.ar.core.TrackingState
import com.google.ar.sceneform.Node
import com.google.ar.sceneform.math.Vector3
import com.google.ar.sceneform.samples.nomtekdemo.R
import com.google.ar.sceneform.ux.ArFragment

/**
 * This is an example activity that uses the Sceneform UX package to make common AR tasks easier.
 */
class MainActivity : AppCompatActivity() {

    private lateinit var arFragment: ArFragment

    // Map of nodes indicating which of them has benn added to the scene
    private var nodesState = HashMap<Node, Boolean>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        if (!checkIsSupportedDeviceOrFinish(this)) {
            return
        }

        setContentView(R.layout.main_activity)
        arFragment = supportFragmentManager.findFragmentById(R.id.ar_fragment) as ArFragment

        val nodesFactory = NodesFactory(this)

        // Preparing nodes

        nodesFactory.createButton(Vector3(0F, 0.4F, -2F)) { node ->
            nodesState[node] = false
            node.clickListener = {
                Toast.makeText(this, "Click!", Toast.LENGTH_LONG).show()
            }
        }

        nodesFactory.createLabel(Vector3(0F, 0F, -2F)) { node ->
            nodesState[node] = false
        }

        nodesFactory.createImageView(Vector3(0F, -0.6F, -2F)) { node ->
            nodesState[node] = false
        }

        // Displaying nodes on scene
        arFragment.arSceneView.scene.addOnUpdateListener {
            if (arFragment.arSceneView.arFrame?.camera?.trackingState == TrackingState.TRACKING) {
                // We can add AR objects after session is ready and camera is in tracting mode
                nodesState.forEach { (node, isAdded) ->
                    if (!isAdded) {
                        arFragment.arSceneView.scene.addChild(node)
                        nodesState[node] = true
                    }
                }
            }
        }
    }


    companion object {

        private const val TAG = "AR_CORE"
        private const val MIN_OPENGL_VERSION = 3.0

        /**
         * Sceneform requires Android N on the device as well as OpenGL 3.0 capabilities.
         */
        fun checkIsSupportedDeviceOrFinish(activity: Activity): Boolean {
            val openGlVersionString = (activity.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager)
                    .deviceConfigurationInfo
                    .glEsVersion
            if (openGlVersionString.toDouble() < MIN_OPENGL_VERSION) {
                Log.e(TAG, "Sceneform requires OpenGL ES 3.0 later")
                Toast.makeText(activity, "Sceneform requires OpenGL ES 3.0 or later", Toast.LENGTH_LONG).show()
                activity.finish()
                return false
            }
            return true
        }
    }


}
