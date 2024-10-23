import { registerPlugin } from '@capacitor/core';

import type { RingtonePlayerPlugin } from './definitions';

const RingtonePlayer = registerPlugin<RingtonePlayerPlugin>('RingtonePlayer', {
  web: () => import('./web').then((m) => new m.RingtonePlayerWeb()),
});

export * from './definitions';
export { RingtonePlayer };
