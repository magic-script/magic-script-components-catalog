package com.reactlibrary;

import android.os.Handler;
import android.os.Looper;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.view.View;
import android.widget.FrameLayout;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.google.ar.sceneform.ux.ArFragment;


// import com.facebook.react.uimanager.ReactProp;

public class ArViewManager extends ViewGroupManager<FrameLayout> { //ViewGroupManager

    public static final String REACT_CLASS = "RCTArView";
    static FragmentManager fragmentManager = null;
    static int containerId = View.generateViewId();

    private static FrameLayout mContainer;

    private static ViewGroupManager manager;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected FrameLayout createViewInstance(ThemedReactContext reactContext) {
        manager = this;
        FrameLayout arContainer = new FrameLayout(reactContext);
        //arContainer.setBackgroundColor(Color.BLUE);
        arContainer.setId(containerId);

        // View child = LayoutInflater.from(reactContext).inflate(R.layout.test_fragment, arContainer, false);
        // arContainer.addView(child);
        mContainer = arContainer;

        return arContainer;
    }

    @Override
    public boolean needsCustomLayoutForChildren() {
        return true;
    }

    public static void beginFragment() {
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                Fragment fragment = new ArFragment(); // new ArFragment();
                fragmentManager.beginTransaction().add(fragment, "arFragment").commitNow();
                manager.addView(mContainer, fragment.getView(), 0);
            }
        });
    }

    @ReactProp(name = "text")
    public void setText(FrameLayout view, @Nullable String text) {
        // view.setText(text);
    }


}
