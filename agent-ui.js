export function renderUI(mount, field) {
  const box = document.createElement("div");
  box.innerText =
    "An agent is present.\nInteraction is possible.\nNothing will be kept.";

  mount.appendChild(box);
}
