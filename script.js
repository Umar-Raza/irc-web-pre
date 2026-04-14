const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const dots = document.querySelectorAll(".dot");
const slideCounter = document.getElementById("slideCounter");
const progressBar = document.getElementById("progressBar");

let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel() {
  // Move the track
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update dots
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");

  // Update Slide Counter
  const slideNum = (currentIndex + 1).toString().padStart(2, "0");
  const totalNum = totalSlides.toString().padStart(2, "0");
  slideCounter.innerText = `${slideNum} / ${totalNum}`;

  // Update Progress Bar
  const progressPercentage = ((currentIndex + 1) / totalSlides) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateCarousel();
  } else {
    // Shake effect at the end
    const wrapper = document.querySelector(".carousel-wrapper");
    wrapper.classList.remove("shake-limit");
    void wrapper.offsetWidth; // Trigger reflow
    wrapper.classList.add("shake-limit");
    setTimeout(() => wrapper.classList.remove("shake-limit"), 400);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  } else {
    // Optional: Shake at the beginning too
    const wrapper = document.querySelector(".carousel-wrapper");
    wrapper.classList.remove("shake-limit");
    void wrapper.offsetWidth; // Trigger reflow
    wrapper.classList.add("shake-limit");
    setTimeout(() => wrapper.classList.remove("shake-limit"), 400);
  }
});

// Clickable dots
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    currentIndex = parseInt(e.target.getAttribute("data-index"));
    updateCarousel();
  });
});

// Optional: Auto-play functionality (uncomment if you want it to slide automatically)
// setInterval(() => {
//     currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
//     updateCarousel();
// }, 5000); // Changes slide every 5 seconds

// Keyboard navigation Support
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextBtn.click();
  } else if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
});
