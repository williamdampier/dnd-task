let parent = document.getElementById('wrapper');
let parentRect = parent.getBoundingClientRect();

let draggable = document.getElementById('element');
let draggableRect = draggable.getBoundingClientRect();

let dragging = false;

function moveStart(e) {
  e.preventDefault();
  dragging = true;
}

function moveEnd(e) {
  e.preventDefault();
  dragging = false;
}

function moving(e) {
  e.preventDefault();
  if (dragging) {
    if (
      e.clientX >= parentRect.left &&
      e.clientX + draggableRect.width <= parentRect.right &&
      e.clientY >= parentRect.top &&
      e.clientY + draggableRect.height <= parentRect.bottom
    ) {
      draggable.style.left = `${e.clientX}px`;
      draggable.style.top = `${e.clientY}px`;
    } else {
      if (e.clientX + draggableRect.width >= parentRect.right) {
        draggable.style.left = `${parentRect.right - draggableRect.width}px`;
      }

      if (e.clientY + draggableRect.height >= parentRect.bottom) {
        draggable.style.top = `${parentRect.bottom - draggableRect.height}px`;
      }
    }
  }
}

document.addEventListener('mousedown', moveStart);
document.addEventListener('mousemove', moving);
document.addEventListener('mouseup', moveEnd);
