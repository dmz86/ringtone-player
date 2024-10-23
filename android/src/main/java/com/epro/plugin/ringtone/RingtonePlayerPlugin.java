package com.epro.plugin.ringtone;

import android.content.Context;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.util.Log;
import com.getcapacitor.Plugin;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginCall;

@CapacitorPlugin(name = "RingtonePlayer")
public class RingtonePlayerPlugin extends Plugin {

    private RingtonePlayer implementation = new RingtonePlayer();

    public void playRingtone(PluginCall call) {
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

    public void stopRingtone(PluginCall call) {
        try {
            Context context = getContext();

            // Ottieni la suoneria di default del dispositivo
            Uri ringtoneUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE);
            Ringtone ringtone = RingtoneManager.getRingtone(context, ringtoneUri);

            // Ferma la suoneria
            ringtone.stop();

            call.resolve();
        } catch (Exception e) {
            call.reject("Errore nella riproduzione della suoneria", e);
        }
    }
}
