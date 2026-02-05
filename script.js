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
  // const container = noBtn.parentElement;

  // const containerRect = container.getBoundingClientRect();
  // const btnRect = noBtn.getBoundingClientRect();

  // const maxX = containerRect.width - btnRect.width;
  // const maxY = containerRect.height - btnRect.height;
  const areaRect = buttonsArea.getBoundingClientRect();
  const wrapperRect = noWrapper.getBoundingClientRect();

  const maxX = areaRect.width - wrapperRect.width;
  const maxY = areaRect.height - wrapperRect.height;
  speed += 0.2;

  const offset = Math.random() * maxX * speed;

  noWrapper.style.transform = `translate(${offset}px, ${offset}px)`;
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
