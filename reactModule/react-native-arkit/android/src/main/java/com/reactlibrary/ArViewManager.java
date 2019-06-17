package com.reactlibrary;

import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.widget.FrameLayout;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.google.ar.sceneform.Scene;
import com.google.ar.sceneform.ux.ArFragment;
import com.reactlibrary.scene.UiNodesManager;

/**
 * View INSTANCE that is responsible for creating AR Fragment
 */
public class ArViewManager extends ViewGroupManager<FrameLayout> { //ViewGroupManager

    public static final String REACT_CLASS = "RCTARKit";

    // TODO Weak reference
    private static AppCompatActivity mActivity;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected FrameLayout createViewInstance(final ThemedReactContext reactContext) {
        // view that contains AR fragment
        FrameLayout mContainer = new FrameLayout(reactContext);
        // int viewId = View.generateViewId();
        // mContainer.setId(viewId);

        ArFragment fragment = new ArFragment(); // new ArFragment();
        mActivity.getSupportFragmentManager().beginTransaction().add(fragment, "arFragment").commitNow();
        addView(mContainer, fragment.getView(), 0);
        Scene scene = fragment.getArSceneView().getScene();
        UiNodesManager.registerScene(scene);

        return mContainer;
    }

    @Override
    public boolean needsCustomLayoutForChildren() {
        return true;
    }

    public static void initActivity(final AppCompatActivity activity) {
        mActivity = activity;
    }

    @ReactProp(name = "text")
    public void setText(FrameLayout view, @Nullable String text) {
        // view.setText(text);
    }


}
