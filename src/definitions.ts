export interface RingotonePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  playRingtone(): Promise<{ result: boolean }>;
  stopRingtone(): Promise<{ result: boolean }>;
}
