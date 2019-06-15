package com.reactlibrary;

import android.os.Handler;
import android.os.Looper;
import android.support.v7.app.AppCompatActivity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.ar.sceneform.math.Vector3;
import com.reactlibrary.scene.NodesFactory;
import com.reactlibrary.scene.NodesManager;
import com.reactlibrary.scene.UiNode;

import java.util.Collections;
import java.util.Map;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;

/**
 * Android module that is responisble for "parsing" JS tags to generate AR Nodes
 * Based on: https://facebook.github.io/react-native/docs/native-modules-android
 */
public class ARComponentManager extends ReactContextBaseJavaModule {

    private NodesFactory nodesFactory;

    public ARComponentManager(ReactApplicationContext reactContext) {
        super(reactContext);
        // here activity is null (so we use initAR method)
        nodesFactory = new NodesFactory(reactContext);
    }

    @Override
    public String getName() {
        return "ARComponentManager";
    }

    @Override
    public Map<String, Object> getConstants() {
        return Collections.emptyMap();
    }

    /**
     * Must be called before adding AR View (Fragment)
     */
    @ReactMethod
    public void initAR() {
        AppCompatActivity activity = (AppCompatActivity)getCurrentActivity();
        ArViewManager.initArFragment(activity.getSupportFragmentManager());
    }

    /**
     * Node creation methods are called from
     * react-native-magic-script/components/platform/platform-factory.js
     */
    @ReactMethod
    public void createButtonNode(Object props, final String nodeId) {
        Vector3 position = new Vector3(0, 0, - 2);
        nodesFactory.createButton(position, new Function1<UiNode, Unit>() {
            @Override
            public Unit invoke(UiNode uiNode) {
                NodesManager.registerNode(uiNode, nodeId);
                return Unit.INSTANCE;
            }
        });
    }


    @ReactMethod
    public void clearScene() {
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                NodesManager.clear();
            }
        });
    }


}
