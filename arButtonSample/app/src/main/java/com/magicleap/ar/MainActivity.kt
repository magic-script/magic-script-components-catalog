package com.magicleap.ar

import android.app.Activity
import android.app.ActivityManager
import android.content.Context
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.widget.Toast
import com.google.ar.core.Pose
import com.google.ar.core.TrackingState
import com.google.ar.sceneform.AnchorNode
import com.google.ar.sceneform.rendering.Renderable
import com.google.ar.sceneform.rendering.ViewRenderable
import com.google.ar.sceneform.samples.nomtekdemo.R
import com.google.ar.sceneform.ux.ArFragment
import com.google.ar.sceneform.ux.TransformableNode

/**
 * This is an example activity that uses the Sceneform UX package to make common AR tasks easier.
 */
class MainActivity : AppCompatActivity() {

    private lateinit var arFragment: ArFragment

    // Map of renderables indicating which of them has benn added to the scene
    private var renderablesState = HashMap<Renderable, Boolean>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        if (!checkIsSupportedDeviceOrFinish(this)) {
            return
        }

        setContentView(R.layout.main_activity)
        arFragment = supportFragmentManager.findFragmentById(R.id.ar_fragment) as ArFragment

        // Preparing renderable view
        ViewRenderable
                .builder()
                .setView(this, R.layout.button)
                .build()
                .thenAccept { renderable ->
                    renderablesState[renderable] = false
                    renderable.view.setOnClickListener {
                        Toast.makeText(this, "click!", Toast.LENGTH_SHORT).show()
                    }
                }

        // Displaying on scene
        arFragment.arSceneView.scene.addOnUpdateListener {
            if (arFragment.arSceneView.arFrame?.camera?.trackingState == TrackingState.TRACKING) {
                // We can add AR objects after session is ready and camera is in tracting mode
                renderablesState.forEach { (renderable, isAdded) ->
                    if (!isAdded) {
                        addButton(renderable)
                        renderablesState[renderable] = true
                    }
                }
            }
        }
    }

    // Creates Node and assign renderable view to it
    private fun addButton(renderable: Renderable) {
        // add after delay (session must be ready and in tracking mode)
        val pos = floatArrayOf(0f, 0f, -2f)
        val rotation = floatArrayOf(0f, 0f, 0f, 0f)
        val session = arFragment.arSceneView.session
        val anchor = session!!.createAnchor(Pose(pos, rotation))
        val anchorNode = AnchorNode(anchor)
        anchorNode.setParent(arFragment.arSceneView.scene)
        val button = TransformableNode(arFragment.transformationSystem)
        button.setParent(anchorNode)
        button.renderable = renderable
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
