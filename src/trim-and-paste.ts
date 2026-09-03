import { getPreferences, runTrimCommand } from "./trim-core";

export default async function command(): Promise<void> {
  const preferences = getPreferences<Preferences.TrimAndPaste>();
  await runTrimCommand("paste", preferences);
}
