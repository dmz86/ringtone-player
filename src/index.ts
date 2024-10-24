import { registerPlugin } from '@capacitor/core';

import type { RingotonePlugin } from './definitions';

const Ringotone = registerPlugin<RingotonePlugin>('Ringotone', {
  web: () => import('./web').then((m) => new m.RingotoneWeb()),
});

export * from './definitions';
export { Ringotone };
