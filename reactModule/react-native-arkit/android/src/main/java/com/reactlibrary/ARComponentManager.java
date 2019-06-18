package com.reactlibrary;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.google.ar.sceneform.math.Vector3;
import com.reactlibrary.scene.NodesFactory;
import com.reactlibrary.scene.UiNode;
import com.reactlibrary.scene.UiNodesManager;

import java.util.Collections;
import java.util.Map;

/**
 * Android module that is responisble for "parsing" JS tags to generate AR Nodes
 * Based on: https://facebook.github.io/react-native/docs/native-modules-android
 * <p>
 * Node creation methods are called from
 * react-native-magic-script/components/platform/platform-factory.js
 */
public class ARComponentManager extends ReactContextBaseJavaModule {

    private static final String LOG_TAG = "ARComponentManager";
    private NodesFactory nodesFactory;

    // All code inside react method must be called from main thread
    private Handler mainHandler = new Handler(Looper.getMainLooper());

    private Context context;

    public ARComponentManager(ReactApplicationContext reactContext) {
        super(reactContext);
        // here activity is null (so we use initAR method)
        nodesFactory = new NodesFactory(reactContext);
        this.context = reactContext;
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
     * Creates node that is a parent for other nodes
     * (it does not contain a view)
     *
     * @param props  properties (e.g. localPosition)
     * @param nodeId id of the node
     */
    @ReactMethod
    public void createViewNode(final ReadableMap props, final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                Vector3 position = readPosition(props);
                UiNode node = nodesFactory.createViewGroup(position);
                UiNodesManager.registerNode(node, nodeId);
            }
        });
    }

    /**
     * Creates a button
     *
     * @param props  properties (e.g. localPosition)
     * @param nodeId id of the node
     */
    @ReactMethod
    public void createButtonNode(final ReadableMap props, final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                Vector3 position = readPosition(props);
                UiNode node = nodesFactory.createButton(position);
                UiNodesManager.registerNode(node, nodeId);
            }
        });
    }

    @ReactMethod
    public void createImageNode(final ReadableMap props, final String nodeId) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                ReadableMap source = props.getMap("source");

                Log.d(LOG_TAG, "source= " + source.toString());

                String path = source.getString("uri");

                Toast.makeText(context, "Path= " + path, Toast.LENGTH_LONG).show();

                Vector3 position = readPosition(props);
                UiNode node = nodesFactory.createImageView(position, path);
                UiNodesManager.registerNode(node, nodeId);
            }
        });
    }

    @ReactMethod
    public void createTextNode(ReadableMap props, final String nodeId) {
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
    public void updateNode(final String nodeId, final ReadableMap properties) {
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

    private Vector3 readPosition(ReadableMap props) {
        ReadableArray posArray = props.getArray("position");
        final float x = (float) posArray.getDouble(0);
        final float y = (float) posArray.getDouble(1);
        final float z = (float) posArray.getDouble(2);

        return new Vector3(x, y, z);
    }

}
