package com.reactlibrary;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;

public class HackyFrameLayout extends FrameLayout {

    private final Runnable measureAndLayout = new Runnable() {
        @Override
        public void run() {
            measure(View.MeasureSpec.makeMeasureSpec(getWidth(), View.MeasureSpec.EXACTLY),
                View.MeasureSpec.makeMeasureSpec(getHeight(), View.MeasureSpec.EXACTLY)
            );
            layout(getLeft(), getTop(), getRight(), getBottom());
        }
    };

    public HackyFrameLayout(Context context) {
        super(context);
    }

    public HackyFrameLayout(Context context, AttributeSet attrs
    ) {
        super(context, attrs);
    }

    public HackyFrameLayout(Context context, AttributeSet attrs, int defStyleAttr
    ) {
        super(context, attrs, defStyleAttr);
    }


    public HackyFrameLayout(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes
    ) {
        super(context, attrs, defStyleAttr, defStyleRes);
    }

    @Override
    public void requestLayout() {
        super.requestLayout();
        post(measureAndLayout);
    }

}
