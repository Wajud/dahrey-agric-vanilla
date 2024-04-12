const backBtns = document.querySelectorAll(".backjs");
const nextBtns = document.querySelectorAll(".nextjs");

const allImages = {
  palmKernelImages: [
    "../assets/palm-1.jpg",
    "../assets/slide-6.jpg",
    "../assets/palm-kernel.jpeg",
    "../assets/palm-kernel-nursery.jpeg",
  ],

  cassavaImages: ["../assets/cassava.jpeg", "../assets/cassava-2.png"],

  waterMelonImages: [
    "../assets/water-melon-production.jpg",
    "../assets/water-melon.jpeg",
    "../assets/water-melon-plant.jpeg",
  ],

  palmOilImages: [
    "../assets/palm-oil.jpeg",
    "../assets/palm-oil-production.jpeg",
  ],
};

backBtns.forEach((backBtn) => {
  let count = 0;
  backBtn.addEventListener("click", (e) => {
    const parent = e.currentTarget.parentElement.parentElement.parentElement;
    const targetImage = parent.querySelector(".image-holder");
    const croptype = parent.dataset.croptype;

    if (count <= 0) {
      count = allImages[croptype].length - 1;
    } else {
      count--;
    }

    targetImage.src = allImages[croptype][count];
  });
});

nextBtns.forEach((nextBtn) => {
  let count = 0;
  nextBtn.addEventListener("click", (e) => {
    const parent = e.currentTarget.parentElement.parentElement.parentElement;
    const targetImage = parent.querySelector(".image-holder");
    const croptype = parent.dataset.croptype;

    if (count == allImages[croptype].length - 1) {
      count = 0;
    } else {
      count++;
    }

    targetImage.src = allImages[croptype][count];
  });
});
