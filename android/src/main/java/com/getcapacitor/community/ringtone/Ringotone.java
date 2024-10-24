package com.getcapacitor.community.ringtone;

import android.util.Log;

public class Ringotone {
    String TAG = "Ringotone";

    public String echo(String value) {
        Log.i(TAG, "echo");
        return value;
    }

    public Boolean playRingtone() {
        Log.i(TAG, "playRingtone");
        return true;
    }

    public Boolean stopRingtone() {
        Log.i(TAG, "stopRingtone");
        return true;
    }
}
