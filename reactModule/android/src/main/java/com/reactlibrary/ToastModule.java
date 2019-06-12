package com.reactlibrary;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

/**
 * Example based on: https://facebook.github.io/react-native/docs/native-modules-android
 */
public class ToastModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);

        /*
        AppCompatActivity activity = (AppCompatActivity)getCurrentActivity();
        if (activity != null) {
            // TODO Add AR fragment
            activity.getSupportFragmentManager().beginTransaction()
        }
        */
    }

    @Override
    public String getName() {
        return "ToastExample";
    }

    // Optional
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>(10);
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }


}
