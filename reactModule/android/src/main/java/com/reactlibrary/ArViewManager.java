package com.reactlibrary;

import android.support.annotation.Nullable;
import android.widget.TextView;

import com.facebook.react.uimanager.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

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

    @ReactProp(name = "text")
    public void setText(TextView view, @Nullable String text) {
        view.setText(text);
    }
}
