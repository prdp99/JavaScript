const draggable = document.querySelectorAll(".draggable");
const container = document.querySelectorAll(".container");

draggable.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

container.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElements = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    console.log(afterElements);
    if (afterElements == null) {
      container.appendChild(draggable);
    } else {
        container.insertBefore(draggable, afterElements)
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
