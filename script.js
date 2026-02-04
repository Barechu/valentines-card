const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
let speed = 1;
let growCount = 0;
const moveButton = () => {
  const container = noBtn.parentElement;

  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  speed += 0.2;
  //   const randomX = Math.random() * maxX * speed;
  //   const randomX = Math.random() * maxX;
  //   const randomY = Math.random() * maxY;
  const offset = Math.random() * maxX * speed;
  //   noBtn.style.left = `${randomX}px`;
  //   noBtn.style.top = `${randomY}px`;
  noBtn.style.transform = `translate(${offset}px, ${offset}px)`;
  growCount++;

  const scale = Math.min(1 + growCount * 0.15, 3); // max 3x size
  yesBtn.style.transform = `scale(${scale})`;
};

noBtn.addEventListener("mouseenter", moveButton);

noBtn.addEventListener("touchstart", moveButton);

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
