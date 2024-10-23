var capacitorRingtonePlayer = (function (exports, core) {
    'use strict';

    const RingtonePlayer = core.registerPlugin('RingtonePlayer', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.RingtonePlayerWeb()),
    });

    class RingtonePlayerWeb extends core.WebPlugin {
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
        RingtonePlayerWeb: RingtonePlayerWeb
    });

    exports.RingtonePlayer = RingtonePlayer;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
