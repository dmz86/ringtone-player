'use strict';

var core = require('@capacitor/core');

const Ringotone = core.registerPlugin('Ringotone', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.RingotoneWeb()),
});

class RingotoneWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    RingotoneWeb: RingotoneWeb
});

exports.Ringotone = Ringotone;
//# sourceMappingURL=plugin.cjs.js.map
