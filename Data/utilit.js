export function renderToDom (id, htmlToRender) {
  const selectedDiv = document.querySelector(id);
  selectedDiv.innerHTML = htmlToRender
}
