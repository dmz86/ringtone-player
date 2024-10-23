export interface RingtonePlayerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
