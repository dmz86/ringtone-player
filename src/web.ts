import { WebPlugin } from '@capacitor/core';

import type { RingtonePlayerPlugin } from './definitions';

export class RingtonePlayerWeb extends WebPlugin implements RingtonePlayerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
