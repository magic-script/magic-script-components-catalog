package com.magicleap.ar

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import com.google.ar.sceneform.math.Vector3
import com.google.ar.sceneform.rendering.Renderable
import com.google.ar.sceneform.rendering.ViewRenderable
import com.reactlibrary.R

class NodesFactory(private val context: Context) {

    fun createButton(position: Vector3, result: (uiNode: UiNode) -> Unit) {
        val view = LayoutInflater.from(context).inflate(R.layout.button, null)
        createRenderable(view) { renderable ->
            val node = createUiNode(position, renderable)
            view.setOnClickListener { node.clickListener?.invoke() }
            result(node)
        }
    }

    fun createLabel(position: Vector3, result: (uiNode: UiNode) -> Unit) {
        val view = LayoutInflater.from(context).inflate(R.layout.label, null)
        createRenderable(view) { renderable ->
            val node = createUiNode(position, renderable)
            view.setOnClickListener { node.clickListener?.invoke() }
            result(node)
        }
    }

    fun createImageView(position: Vector3, result: (uiNode: UiNode) -> Unit) {
        val view = LayoutInflater.from(context).inflate(R.layout.image, null)
        createRenderable(view) { renderable ->
            val node = createUiNode(position, renderable)
            view.setOnClickListener { node.clickListener?.invoke() }
            result(node)
        }
    }

    private fun createRenderable(view: View, result: (renderable: Renderable) -> Unit) {
        ViewRenderable
                .builder()
                .setView(context, view)
                .build()
                .thenAccept { renderable ->
                    result(renderable)
                }
    }

    private fun createUiNode(localPos: Vector3, renderable: Renderable): UiNode {
        val node = UiNode()
        node.localPosition = localPos
        node.renderable = renderable
        return node
    }

}