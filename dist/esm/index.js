import { registerPlugin } from '@capacitor/core';
const RingtonePlayer = registerPlugin('RingtonePlayer', {
    web: () => import('./web').then((m) => new m.RingtonePlayerWeb()),
});
export * from './definitions';
export { RingtonePlayer };
//# sourceMappingURL=index.js.map