import { WebPlugin } from '@capacitor/core';

import type { RingotonePlugin } from './definitions';

export class RingotoneWeb extends WebPlugin implements RingotonePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async playRingtone(): Promise<{ result: boolean }>{
    return { result: true }
  };
  async stopRingtone(): Promise<{ result: boolean }>{
    return { result: true }
  };
}
