package com.reactlibrary.scene

import android.content.Context
import android.net.Uri
import android.os.Handler
import android.util.TypedValue
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
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

    companion object {
        // By default, every 250dp for the view becomes 1 meter for the renderable
        // https://developers.google.com/ar/develop/java/sceneform/create-renderables
        const val DP_TO_METER_RATIO = 250
    }

    private val screenDensity = context.resources.displayMetrics.density;

    fun createViewGroup(position: Vector3): UiNode {
        return createUiNode(position)
    }

    fun createButton(position: Vector3, size: Vector3, textSize: Double?): UiNode {
        val node = createUiNode(position)
        val view = LayoutInflater.from(context).inflate(R.layout.button, null) as Button
        if (textSize != null) {
            view.setTextSize(TypedValue.COMPLEX_UNIT_PX, metersToPx(textSize).toFloat())
        }

        createRenderable(view, size) { renderable ->
            node.renderable = renderable
            view.setOnClickListener { node.clickListener?.invoke() }
        }
        return node
    }

    fun createLabel(position: Vector3, size: Vector3, textSize: Double? = null): UiNode {
        val node = createUiNode(position)
        val view = LayoutInflater.from(context).inflate(R.layout.label, null)
        createRenderable(view, size) { renderable ->
            node.renderable = renderable
            view.setOnClickListener { node.clickListener?.invoke() }
        }
        return node
    }

    fun createImageView(position: Vector3, size: Vector3, path: String): UiNode {
        val node = createUiNode(position)
        val view = LayoutInflater.from(context).inflate(R.layout.image, null) as ImageView

        val uri = if (path.startsWith("resources_")) { // for release
            val packageName = context.packageName
            Uri.parse("android.resource://$packageName/drawable/$path")
        } else { // for debug (metro, image located in localhost)
            Uri.parse(path)
        }

        createRenderable(view, size) { renderable ->
            node.renderable = renderable
            view.setOnClickListener { node.clickListener?.invoke() }
        }

        // TODO doesn't work without delay (load after attached?)
        Handler().postDelayed({
            // http://localhost:8081/assets/resources/DemoPicture1.jpg
            Glide.with(context)
                    .load(uri)
                    .into(view)
        }, 3000)

        return node
    }

    private fun createRenderable(view: View, size: Vector3, result: (renderable: Renderable) -> Unit) {
        // convert meters to px (1m is DP_TO_METER_RATIO by default)
        val widthPx = metersToPx(size.x.toDouble())
        val heightPx = metersToPx(size.y.toDouble())
        view.layoutParams = ViewGroup.LayoutParams(widthPx, heightPx)

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


    // converts ARCore's meters to pixels
    private fun metersToPx(meters: Double): Int {
        return (meters * DP_TO_METER_RATIO * screenDensity).toInt()
    }


}