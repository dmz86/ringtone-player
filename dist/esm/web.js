import { WebPlugin } from '@capacitor/core';
export class RingotoneWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async playRingtone() {
        return { result: true };
    }
    ;
    async stopRingtone() {
        return { result: true };
    }
    ;
}
//# sourceMappingURL=web.js.map