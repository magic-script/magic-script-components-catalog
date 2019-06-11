package com.magicleap.ar

import android.util.Log
import com.google.ar.sceneform.Node
import com.google.ar.sceneform.Scene

object NodesManager {

    private val rootNode = Node()
    private val nodesById = HashMap<String, Node>()

    private val LOG_TAG = "NodesManager"

    fun registerScene(scene: Scene) {
        scene.addChild(rootNode)
    }

    fun findNodeWithId(nodeId: String): Node? {
        return nodesById[nodeId]
    }

    fun registerNode(node: Node, nodeId: String) {
        node.name = nodeId
        nodesById[nodeId] = node
        Log.d(LOG_TAG, "register node: $node)")
    }

    fun addNodeToRoot(nodeId: String) {
        val node = nodesById[nodeId]

        if (node == null) {
            Log.e(LOG_TAG, "cannot add node: not found")
            return
        }
        rootNode.addChild(node)
    }

    fun addNodeToParent(nodeId: String, parentId: String) {
        val node = nodesById[nodeId]
        val parentNode = nodesById[parentId]

        if (node == null) {
            Log.e(LOG_TAG, "cannot add node: not found")
            return
        }
        if (parentNode == null) {
            Log.e(LOG_TAG, "cannot add node: parent not found")
            return
        }

        parentNode.addChild(node)
    }

    fun updateNode(nodeId: String, properties: Map<String, Any>): Boolean {
        val node = nodesById[nodeId]
        if (node == null) {
            Log.e(LOG_TAG, "cannot update node: not found")
            return false
        }

        // TODO

        return true
    }

    fun removeNode(nodeId: String) {
        val node = nodesById[nodeId]

        if (node == null) {
            Log.e(LOG_TAG, "cannot remove node (not found)")
            return
        }
        node.parent?.removeChild(node)
        nodesById.remove(nodeId)
    }

    fun clear() {
        nodesById.forEach { (_, node) ->
            node.parent?.removeChild(node)
            nodesById.clear()
        }
    }


}