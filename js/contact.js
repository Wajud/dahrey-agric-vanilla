const farms = [
  {
    mainAdress: "Dahrey Palm Oil Plantation, Imeke Akinde,",
    subAddress: "Along Ifoyintedo Road, Ipokia Local Government, Ogun State.",
  },
  {
    mainAdress: "Dahrey Palm Oil Plantation Ifoyintedo, Farm settlement, ",
    subAddress: "Ipokia Local Government, Ogun State.",
  },
  {
    mainAdress: "Dahrey Palm Oil Plantation,  Alasua Farm,",
    subAddress: "Sasha Area, Ipokia Local Government, Ogun State.",
  },
  {
    mainAdress: "Dahrey Palm Oil Plantation,  Odan Kekere Farm,",
    subAddress:
      "Along Odan Itoro Road, Yewa South Local Government, Ogun State.",
  },
];

const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

const topAddress = document.querySelector(".section-2 .main-address");
const addressDescription = document.querySelector(
  ".section-2 .address-description"
);

let count = 0;

previousBtn.addEventListener("click", () => {
  if (count === 0) {
    count = farms.length - 1;
  } else {
    count--;
  }

  topAddress.textContent = farms[count].mainAdress;
  addressDescription.textContent = farms[count].subAddress;
});

nextBtn.addEventListener("click", () => {
  if (count === farms.length - 1) {
    count = 0;
  } else {
    count++;
  }

  topAddress.textContent = farms[count].mainAdress;
  addressDescription.textContent = farms[count].subAddress;
});
