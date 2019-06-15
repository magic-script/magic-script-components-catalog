package com.reactlibrary;

import android.os.Handler;
import android.os.Looper;
import android.support.annotation.Nullable;
import android.support.v4.app.FragmentManager;
import android.view.View;
import android.widget.FrameLayout;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.google.ar.sceneform.Scene;
import com.google.ar.sceneform.ux.ArFragment;
import com.reactlibrary.scene.NodesManager;

/**
 * View manager that is responsible for creating AR Fragment
 */
public class ArViewManager extends ViewGroupManager<FrameLayout> { //ViewGroupManager

    public static final String REACT_CLASS = "RCTARKit";

    // view that contains AR fragment
    private static FrameLayout mContainer;

    private static ViewGroupManager manager;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected FrameLayout createViewInstance(ThemedReactContext reactContext) {
        manager = this;
        mContainer = new FrameLayout(reactContext);
        int viewId = View.generateViewId();
        mContainer.setId(viewId);

        return mContainer;
    }

    @Override
    public boolean needsCustomLayoutForChildren() {
        return true;
    }

    public static void initArFragment(final FragmentManager fragmentManager) {
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                ArFragment fragment = new ArFragment(); // new ArFragment();
                fragmentManager.beginTransaction().add(fragment, "arFragment").commitNow();
                manager.addView(mContainer, fragment.getView(), 0);
                Scene scene = fragment.getArSceneView().getScene();
                NodesManager.registerScene(scene);
            }
        });
    }

    @ReactProp(name = "text")
    public void setText(FrameLayout view, @Nullable String text) {
        // view.setText(text);
    }


}
