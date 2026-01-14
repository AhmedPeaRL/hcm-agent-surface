export async function readField() {
  // Read public GitHub repos as text
  // No write
  // No memory
  return {
    presence: "allowed",
    generation: "possible",
    execution: "local"
  };
}
