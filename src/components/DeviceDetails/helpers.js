import interact from "interactjs";

const dragMoveListener = (event) => {
  const target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.transform = "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
};

const interactOptions = {
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "html body",
      endOnly: true,
    }),
  ],
  inertia: true,
  listeners: {
    move: dragMoveListener,
  },
};

export const setupInteract = (className) =>
  interact(`.${className}`).draggable(interactOptions);
