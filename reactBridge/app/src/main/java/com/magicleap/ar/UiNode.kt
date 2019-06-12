package com.magicleap.ar

import com.google.ar.sceneform.Node

class UiNode : Node() {
    var isVisible = true
    var clickListener: (() -> Unit)? = null
}