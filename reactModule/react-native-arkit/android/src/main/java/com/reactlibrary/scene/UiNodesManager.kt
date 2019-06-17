package com.reactlibrary.scene

import android.util.Log
import com.google.ar.sceneform.Node
import com.google.ar.sceneform.Scene

object UiNodesManager {

    private val rootNode = Node()
    private val nodesById = HashMap<String, Node>()

    private val LOG_TAG = "UiNodesManager"

    @JvmStatic
    fun registerScene(scene: Scene) {
        scene.addChild(rootNode)
    }

    @JvmStatic
    fun findNodeWithId(nodeId: String): Node? {
        return nodesById[nodeId]
    }

    @JvmStatic
    fun registerNode(node: Node, nodeId: String) {
        node.name = nodeId
        nodesById[nodeId] = node
        Log.d(LOG_TAG, "register node: $node)")
    }

    @JvmStatic
    fun addNodeToRoot(nodeId: String) {
        val node = nodesById[nodeId]

        if (node == null) {
            Log.e(LOG_TAG, "cannot add node: not found")
            return
        }
        rootNode.addChild(node)
    }

    @JvmStatic
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

    @JvmStatic
    fun updateNode(nodeId: String, properties: Any): Boolean {
        val node = nodesById[nodeId]
        if (node == null) {
            Log.e(LOG_TAG, "cannot update node: not found")
            return false
        }

        // TODO

        return true
    }

    @JvmStatic
    fun unregisterNode(nodeId: String) {
        val node = nodesById[nodeId]

        if (node == null) {
            Log.e(LOG_TAG, "cannot unregister node (not found)")
            return
        }
        nodesById.remove(nodeId)
    }

    @JvmStatic
    fun removeNode(nodeId: String) {
        val node = nodesById[nodeId]

        if (node == null) {
            Log.e(LOG_TAG, "cannot remove node (not found)")
            return
        }
        node.parent?.removeChild(node)
    }

    @JvmStatic
    fun clear() {
        nodesById.forEach { (_, node) ->
            node.parent?.removeChild(node)
            nodesById.clear()
        }
    }

    @JvmStatic
    fun validateScene(): Boolean {
        if (nodesById.isEmpty() && rootNode.children.isEmpty()) {
            print("[UiNodesManager] Nodes tree hierarchy and nodes list are empty.")
            return true
        }

        if (nodesById.isEmpty() || rootNode.children.isEmpty()) {
            print("[UiNodesManager] One nodes container (either nodes tree hierarchy (${rootNode.children.size})) or nodes list (${nodesById.size})) is empty!")
            return true
        }

        val looseNodes = rootNode.children.filter { child ->
            return child.parent != null && nodesById.containsKey(child.name)
        }

        if (looseNodes.isNotEmpty()) {
            print("[UiNodesManager] Found (${looseNodes.size}) loose nodes.")
            return false
        }

        return true
    }

}