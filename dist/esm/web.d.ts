import { WebPlugin } from '@capacitor/core';
import type { RingotonePlugin } from './definitions';
export declare class RingotoneWeb extends WebPlugin implements RingotonePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    playRingtone(): Promise<{
        result: boolean;
    }>;
    stopRingtone(): Promise<{
        result: boolean;
    }>;
}
