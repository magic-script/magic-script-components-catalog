package com.catalog;

import java.net.URI;
import java.util.ArrayList;

import android.content.Intent;
import android.util.Log;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Catalog";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {

            @Override
            protected Bundle getLaunchOptions() {
                Intent intent = getIntent();
                Bundle initialProperties = new Bundle();

                if(intent != null && intent.getData() != null) {
                    String initialUrl = intent.getData().toString();
                    initialProperties.putString("initialUrl", initialUrl);
                }
                return initialProperties;
            }
        };
    }
}
