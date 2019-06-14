package com.reactlibrary;

import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

// Used only in tests
public class TestFragment extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater,
                             @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState
    ) {
        final View view = inflater.inflate(R.layout.test_fragment, container, false);

        view.post(new Runnable() {
            @Override
            public void run() {
                // for instance
                int height = view.getMeasuredHeight();
                int width = view.getMeasuredWidth();

                Log.d("TestFragment", "width=" + width + ", height= " + height);
            }
        });

        return view;
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(getActivity(), "toast from test fragment", Toast.LENGTH_SHORT).show();
            }
        }, 2000);
    }
}
