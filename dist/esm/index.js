import { registerPlugin } from '@capacitor/core';
const Ringotone = registerPlugin('Ringotone', {
    web: () => import('./web').then((m) => new m.RingotoneWeb()),
});
export * from './definitions';
export { Ringotone };
//# sourceMappingURL=index.js.map