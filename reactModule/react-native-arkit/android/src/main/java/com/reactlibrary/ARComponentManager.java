package com.reactlibrary;

import android.os.Handler;
import android.os.Looper;
import android.support.v7.app.AppCompatActivity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.reactlibrary.scene.NodesFactory;
import com.reactlibrary.scene.UiNodesManager;

import java.util.Collections;
import java.util.Map;

/**
 * Android module that is responisble for "parsing" JS tags to generate AR Nodes
 * Based on: https://facebook.github.io/react-native/docs/native-modules-android
 */
public class ARComponentManager extends ReactContextBaseJavaModule {

    private NodesFactory nodesFactory;
    // Methods must be called from main thread
    private Handler mainHandler = new Handler(Looper.getMainLooper());

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
     * Must be called before adding AR View
     */
    @ReactMethod
    public void initAR() {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                AppCompatActivity activity = (AppCompatActivity) getCurrentActivity();
                ArViewManager.initActivity(activity);
            }
        });
    }

    /**
     * Node creation methods are called from
     * react-native-magic-script/components/platform/platform-factory.js
     */
    @ReactMethod
    public void createButtonNode(ReadableMap props, final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                /*
                Vector3 position = new Vector3(0, 0, -2);
                nodesFactory.createButton(position, new Function1<UiNode, Unit>() {
                    @Override
                    public Unit invoke(UiNode uiNode) {
                        UiNodesManager.registerNode(uiNode, nodeId);
                        return Unit.INSTANCE;
                    }
                }); */
            }
        });
    }

    @ReactMethod
    public void createViewNode(Object props, final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                // TODO
            }
        });
    }

    @ReactMethod
    public void createTextNode(Object props, final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                // TODO
            }
        });
    }

    @ReactMethod
    public void createGroupNode(Object props, final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                // TODO
            }
        });
    }

    @ReactMethod
    public void createImageNode(Object props, final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                // TODO
            }
        });
    }

    @ReactMethod
    public void addChildNode(final String nodeId, final String parentId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                UiNodesManager.addNodeToParent(nodeId, parentId);
            }
        });
    }

    @ReactMethod
    public void addChildNodeToContainer(final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                UiNodesManager.addNodeToRoot(nodeId);
            }
        });
    }

    @ReactMethod
    public void removeChildNode(final String nodeId, final String parentId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                UiNodesManager.removeNode(nodeId);
            }
        });
    }

    @ReactMethod
    public void removeChildNodeFromRoot(final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                UiNodesManager.removeNode(nodeId);
            }
        });
    }

    @ReactMethod
    public void updateNode(final String nodeId, final Object properties) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                UiNodesManager.updateNode(nodeId, properties);
            }
        });
    }

    @ReactMethod
    public void clearScene() {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                UiNodesManager.clear();
            }
        });
    }

    @ReactMethod
    public void validateScene() {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                UiNodesManager.validateScene();
            }
        });
    }


    @ReactMethod
    public void addOnPressEventHandler(final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                // TODO
            }
        });
    }

    @ReactMethod
    public void removeOnPressEventHandler(final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                // TODO
            }
        });
    }

}
