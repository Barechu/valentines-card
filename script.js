const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsArea = document.getElementById("buttonsArea");
const noWrapper = document.getElementById("noWrapper");
const messages = [
  "Pwease? 🥺",
  "Cmon dont be shy 😈",
  "I'll buy you ichigo sando😇",
  "Think again 😤",
  "You want YES 😏",
];

let msgIndex = 0;
let speed = 1;
let growCount = 0;

function showMessage() {
  noMessage.textContent = messages[msgIndex % messages.length];
  msgIndex++;
  noWrapper.classList.add("show-message");
}

const moveButton = () => {
  const btnRect = noWrapper.getBoundingClientRect();
  // Viewport bounds
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  //A little padding from edges
  const pad = 8;

  // Allowed range for the element's top-left position (in viewport coords)
  const minLeft = pad;
  const minTop = pad;
  const maxLeft = vw - btnRect.width - pad;
  const maxTop = vh - btnRect.height - pad;

  // Random position within viewport
  const left = minLeft + Math.random() * Math.max(0, maxLeft - minLeft);
  const top = minTop + Math.random() * Math.max(0, maxTop - minTop);

  // Position it using fixed coords so it's always viewport-relative
  noWrapper.style.position = "fixed";
  noWrapper.style.left = `${left}px`;
  noWrapper.style.top = `${top}px`;
  growCount++;

  const scale = Math.min(1 + growCount * 0.15, 3); // max 3x size
  yesBtn.style.transform = `scale(${scale})`;
};

noWrapper.addEventListener("mouseenter", () => {
  (moveButton(), showMessage());
});

noWrapper.addEventListener(
  "touchstart",
  (e) => {
    e.preventDefault();
    (moveButton(), showMessage());
  },
  { passive: false },
);

yesBtn.addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("hidden");
});

const overlay = document.getElementById("overlay");
const popup = overlay.querySelector(".popup");

// Close when clicking outside the GIF
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

// Prevent closing when clicking the GIF itself
popup.addEventListener("click", (e) => {
  e.stopPropagation();
});
