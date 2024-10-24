package com.getcapacitor.community.ringtone;

import android.content.Context;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Ringotone")
public class RingotonePlugin extends Plugin {

    private Ringotone implementation = new Ringotone();

    String TAG = "RingotonePlugin";

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");
        Log.i(TAG, "echo");
        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void playRingtone(PluginCall call) {
        Log.i(TAG, "playRingtone");
        try {
            Context context = getContext();

            // Ottieni la suoneria di default del dispositivo
            Uri ringtoneUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE);
            Ringtone ringtone = RingtoneManager.getRingtone(context, ringtoneUri);

            // Riproduci la suoneria
            ringtone.play();

            call.resolve();
        } catch (Exception e) {
            call.reject("Errore nella riproduzione della suoneria", e);
        }
    }
    @PluginMethod
    public void stopRingtone(PluginCall call) {
        return;
//        try {
//            Context context = getContext();
//
//            // Ottieni la suoneria di default del dispositivo
//            Uri ringtoneUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE);
//            Ringtone ringtone = RingtoneManager.getRingtone(context, ringtoneUri);
//
//            // Ferma la suoneria
//            ringtone.stop();
//
//            call.resolve();
//        } catch (Exception e) {
//            call.reject("Errore nella riproduzione della suoneria", e);
//        }
    }
}
