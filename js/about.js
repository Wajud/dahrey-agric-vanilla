// Mission and Vision

const mission =
  "Our mission is to revolutionize agriculture through sustainable practices and high-quality products. We prioritize environmental care and innovation in our farming techniques to ensure eco-friendly and efficient operations. Our commitment extends beyond profit, aiming to make a positive impact on local communities and the environment.";

const vision =
  "Our vision at Dahrey Agric Empire is to cultivate a future where sustainable agriculture thrives as a beacon of innovation and environmental stewardship. We aspire to be the gold standard in the agricultural industry, setting new benchmarks for excellence agriculture and animals production while championing ethical practices and community empowerment. Together, we envision a world where our efforts not only nourish bodies but also nurture the planet for generations to come.";

const titleContainer = document.querySelector(".title");
const missionTitle = "Mission";
const visionTitle = "Vision";

const missionAndVisionContainer = document.querySelector(".mission p");
const missionBtn = document.querySelector(".mission-btn");
const visionBtn = document.querySelector(".vision-btn");

visionBtn.addEventListener("click", () => {
  missionAndVisionContainer.textContent = vision;
  titleContainer.textContent = visionTitle;
});

missionBtn.addEventListener("click", () => {
  missionAndVisionContainer.textContent = mission;
  titleContainer.textContent = missionTitle;
});

// End of Mission and Vision

//Details and Summary  Functionality

const elipsis = document.querySelector(".elipsis");
const details = document.querySelectorAll(".details");
const readMore = document.querySelector(".readMore");
const readLess = document.querySelector(".readLess");

readMore.addEventListener("click", () => {
  details.forEach((detail) => detail.classList.remove("hide"));
  readMore.classList.add("hide");
  readLess.classList.remove("hide");
  elipsis.classList.add("hide");
});

readLess.addEventListener("click", () => {
  details.forEach((detail) => detail.classList.add("hide"));
  readMore.classList.remove("hide");
  readLess.classList.add("hide");
  elipsis.classList.remove("hide");
});

//Details and Summary  Functionality
