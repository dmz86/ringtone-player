import { WebPlugin } from '@capacitor/core';

import type { RingtonePlayerPlugin } from './definitions';

export class RingtonePlayerWeb extends WebPlugin implements RingtonePlayerPlugin {
  async playRingtone(): Promise<{ result: boolean }>{
    return { result: true }
  };
  async stopRingtone(): Promise<{ result: boolean }>{
    return { result: true }
  };
}
