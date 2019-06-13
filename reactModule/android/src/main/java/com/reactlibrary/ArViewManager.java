package com.reactlibrary;

import android.support.annotation.Nullable;
import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class ArViewManager extends SimpleViewManager<TextView> {

    public static final String REACT_CLASS = "RCTArView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected TextView createViewInstance(ThemedReactContext reactContext) {
        return new TextView(reactContext);
    }

    // requires importing com.facebook.react.uimanager.annotations.ReactProp;
    @ReactProp(name = "text")
    public void setText(TextView view, @Nullable String text) {
        view.setText(text);
    }
}
