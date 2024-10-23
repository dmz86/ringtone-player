import { WebPlugin } from '@capacitor/core';
import type { RingtonePlayerPlugin } from './definitions';
export declare class RingtonePlayerWeb extends WebPlugin implements RingtonePlayerPlugin {
    playRingtone(): Promise<{
        result: boolean;
    }>;
    stopRingtone(): Promise<{
        result: boolean;
    }>;
}
