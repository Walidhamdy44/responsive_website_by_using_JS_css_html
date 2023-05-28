// set random background

let imgs = [
  "0dg5rw0rk6rry9lf.jpg",
  "109-desktop-pc-wallpapers-space-4k-hd.jpg",
  "407-desktop-pc-wallpapers-space-4k-hd-.jpg",
  "ocean-3605547_1280.jpg",
  "space-art-fantasy-art-sky-clouds-wallpaper-preview.jpg",
  "t6w.jpg",
];

let background = document.getElementById("landing");
let counter = setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgs.length);
  background.style.backgroundImage = `url("imgs/${imgs[randomNumber]}")`;
}, 10000);

// ______________________________________

// start setting botton

let settingBtn = document.getElementById("icon");
let settingMenu = document.querySelector(".setting");
let iconLoop = document.querySelector(".iconlopo");

iconLoop.onclick = function () {
  settingMenu.classList.toggle("open");
  settingBtn.classList.toggle("fa-spin");
};

// ___________________________________
//  start set colors

// local storage>>>
let localColor = localStorage.getItem("maincolors");
//  local color هيجيب الي مستخدم ف الموقع
// console.log(localColor);

if (localColor !== null) {
  document.documentElement.style.setProperty("--main-color", localColor);
}

let lis = document.querySelectorAll(".color-list li");

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    let mainColor = e.target.dataset.color;
    document.documentElement.style.setProperty("--main-color", mainColor);

    localStorage.setItem("maincolors", mainColor);
  });
});

// _______________________________________
// randow background >>

let backbtn1 = document.querySelector(".setting-option .background .yes");
let backbtn2 = document.querySelector(".setting-option .background .no");

backbtn1.onclick = function () {
  backbtn1.classList.add("active");
  backbtn2.classList.remove("active");
  setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgs.length);
    background.style.backgroundImage = `url("imgs/${imgs[randomNumber]}")`;
  }, 10000);
};
backbtn2.onclick = function () {
  backbtn2.classList.add("active");
  backbtn1.classList.remove("active");
  clearInterval(counter);
};

// _____________________________________________

// show bollits and Haid it

let bolbtn1 = document.querySelector(".setting-option .bollits .yes");
let bolbtn2 = document.querySelector(".setting-option .bollits .no");
let bolicon = document.querySelector(".bollits-icon");

bolbtn1.onclick = function () {
  bolbtn1.classList.add("active");
  bolbtn2.classList.remove("active");
  bolicon.style.display = "block";
};
bolbtn2.onclick = function () {
  bolbtn2.classList.add("active");
  bolbtn1.classList.remove("active");
  bolicon.style.display = "none";
};

// _____________________________________________
// start prograss
let allboxprog = document.querySelectorAll(".skills .container .prog span");
let boxs = document.querySelectorAll(".skills .container .box");

for (i = 0; i < allboxprog.length; i++) {
  let prograss = allboxprog[i];
  prograss.style.width = prograss.dataset.prog;
}

for (i = 0; i < boxs.length; i++) {
  boxs[i].style.content = "66";
}
// _______________________________________________
// scrollReavel >>
ScrollReveal({
  reset: false,
  distance: "60px",
  delay: 400,
  duration: 1500,
});

ScrollReveal().reveal(".skills .container .prog span", {
  delay: 800,
  origin: "left",
});
ScrollReveal().reveal(".skills .container .box", {
  delay: 700,
  origin: "top",
  interval: 200,
});
ScrollReveal().reveal(".main-title", {
  delay: 100,
  origin: "top",
});
ScrollReveal().reveal(".about img", {
  delay: 700,
  origin: "right",
});
ScrollReveal().reveal(".about h2", {
  delay: 400,
  origin: "left",
});
ScrollReveal().reveal(".about p", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".landing .contant h2", {
  delay: 200,
  origin: "top",
});
ScrollReveal().reveal(".landing .contant p", {
  delay: 400,
  origin: "bottom",
});
ScrollReveal().reveal(".gallary .box", {
  delay: 400,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".Features .container", {
  delay: 400,
  origin: "top",
  interval: 300,
});
ScrollReveal().reveal(".testimonials .container ", {
  delay: 400,
  origin: "bottom",
  interval: 300,
});
ScrollReveal().reveal(".timeline .timeline-content .content ", {
  delay: 500,
  origin: "left",
  interval: 300,
});

// start imge popup >>

let gallaryImg = document.querySelectorAll(".gallary img");

gallaryImg.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create ovarlay
    let ovarlayimg = document.createElement("div");
    ovarlayimg.setAttribute("class", "ovarlay-img");
    document.body.appendChild(ovarlayimg);
    // create popup box

    let popupBox = document.createElement("div");
    popupBox.classList.add("pop-box");
    ovarlayimg.appendChild(popupBox);

    // create imge in pop box
    let imgPop = document.createElement("img");
    imgPop.src = img.src;
    popupBox.appendChild(imgPop);

    // create close botton
    let closeBtn = document.createElement("div");

    // closeBtn.classList.add("fa-solid fa-circle-xmark");
    closeBtn.classList.add("close-btn");
    closeBtn.textContent = "X";
    popupBox.appendChild(closeBtn);
    //  make the btn work >>
    closeBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
      document.querySelector(".ovarlay-img").remove();
    });

    // create H2 Heading of yhe img
    let headingImg = document.createElement("h2");
    popupBox.appendChild(headingImg);
    headingImg.classList.add("main-title");
    headingImg.textContent = img.alt;
  });
});
//  start bolits icons >>
let bolico = document.querySelectorAll(".bollits-icon li");
console.log(bolico);
bolico.forEach((element) => {
  element.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.link).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// ___________________________________________

// Reset Btn
let resretbtn = document.getElementById("reset");
resretbtn.onclick = function () {
  localStorage.clear();
  window.location.reload();
};
// __________________________________________
//  create  Menu

let Menu = document.querySelector(".landing i");
let MenuList = document.querySelector(".landing .nav .links");
let contantMnue = document.querySelector(".landing .contant");
let mnli = document.querySelectorAll(".landing .nav .links li");

Menu.onclick = function () {
  MenuList.style.display = "flex";
  contantMnue.style.marginTop = "70px";
  // MenuList.classList.add("open-menu");
};

// التعامل مع media query   >>

var x = window.matchMedia("(max-width: 991px)");

// console.log(x);
if (x.matches) {
  document.addEventListener("click", (e) => {
    if (e.target !== mnli && e.target !== MenuList && e.target !== Menu) {
      MenuList.style.display = "none";
      contantMnue.style.marginTop = "0px";
    }
  });
}

// ________________
// make the form dose not work
let btnSend = document.getElementById("btnSend");
btnSend.addEventListener("click", (e) => {
  e.preventDefault();
});
//  ______________________
