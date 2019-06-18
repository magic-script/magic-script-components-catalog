package com.reactlibrary.scene

import android.content.Context
import android.os.Handler
import android.view.LayoutInflater
import android.view.View
import android.widget.ImageView
import com.bumptech.glide.Glide
import com.google.ar.sceneform.math.Vector3
import com.google.ar.sceneform.rendering.Renderable
import com.google.ar.sceneform.rendering.ViewRenderable
import com.reactlibrary.R

/**
 * Utility class with methods that create nodes.
 */
class NodesFactory(private val context: Context) {

    fun createViewGroup(position: Vector3): UiNode {
        return createUiNode(position)
    }

    fun createButton(position: Vector3): UiNode {
        val node = createUiNode(position)
        val view = LayoutInflater.from(context).inflate(R.layout.button, null)
        createRenderable(view) { renderable ->
            node.renderable = renderable
            view.setOnClickListener { node.clickListener?.invoke() }
        }
        return node
    }

    fun createLabel(position: Vector3): UiNode {
        val node = createUiNode(position)
        val view = LayoutInflater.from(context).inflate(R.layout.label, null)
        createRenderable(view) { renderable ->
            node.renderable = renderable
            view.setOnClickListener { node.clickListener?.invoke() }
        }
        return node
    }

    fun createImageView(position: Vector3, path: String): UiNode {
        val node = createUiNode(position)
        val view = LayoutInflater.from(context).inflate(R.layout.image, null) as ImageView
        Glide.with(context).load(path).into(view)
        createRenderable(view) { renderable ->
            node.renderable = renderable
            view.setOnClickListener { node.clickListener?.invoke() }
        }
        return node
    }

    private fun createRenderable(view: View, result: (renderable: Renderable) -> Unit) {
        // TODO replace delay
        // Wait until AR engine was loaded
        // @see: https://github.com/google-ar/sceneform-android-sdk/issues/574
        Handler().postDelayed({
            ViewRenderable
                    .builder()
                    .setView(context, view)
                    .build()
                    .thenAccept { renderable ->
                        result(renderable)
                    }
        }, 1000)
    }

    private fun createUiNode(localPos: Vector3): UiNode {
        val node = UiNode()
        node.localPosition = localPos
        return node
    }


}