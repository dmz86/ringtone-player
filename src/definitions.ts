export interface RingtonePlayerPlugin {
  playRingtone(): Promise<{ result: boolean }>;
  stopRingtone(): Promise<{ result: boolean }>;
}
