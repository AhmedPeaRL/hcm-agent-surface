import { renderUI } from "./agent-ui.js";
import { readField } from "./agent-field-reader.js";

export async function startAgent({ mount }) {
  if (!mount) return;

  const field = await readField();
  renderUI(mount, field);
}
