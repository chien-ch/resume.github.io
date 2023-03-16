//(swipe)
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//addEventListener添加事件處理程序
function user() {
  let boxUser = document.getElementById("box-user");
  let closeButton = document.getElementById("close");

  boxUser.style.display = "block";
  boxUser.style.position = "fixed";

  boxUser.onclick = function close(e) {
    if (e.target == boxUser) {
      boxUser.style.display = "none";
    }
  };
  closeButton.addEventListener("click", function () {
    boxUser.style.display = "none";
  });
}

function email() {
  let boxEmail = document.getElementById("box-email");
  let closeButton = document.getElementById("close1");

  boxEmail.style.display = "block";
  boxEmail.style.position = "fixed";

  boxEmail.onclick = function close(e) {
    if (e.target == boxEmail) {
      boxEmail.style.display = "none";
    }
  };
  closeButton.addEventListener("click", function () {
    boxEmail.style.display = "none";
  });
}

function phone() {
  let boxPhone = document.getElementById("box-phone");
  let closeButton = document.getElementById("close2");

  boxPhone.style.display = "block";
  boxPhone.style.position = "fixed";

  boxPhone.onclick = function close(e) {
    if (e.target == boxPhone) {
      boxPhone.style.display = "none";
    }
  };
  closeButton.addEventListener("click", function () {
    boxPhone.style.display = "none";
  });
}

let menubtn = document.getElementById("menubtn");
let menu = document.getElementById("menu");
let link = menu.getElementsByTagName("a"); // 獲取所有a元素
let icon = document.getElementById("icon");
let close = false;

// (resize)檢查窗口大小是否發生了變化 //(media)
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 751px)").matches) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

//(button) //(close)
menubtn.addEventListener("click", function () {
  if (window.matchMedia("(max-width: 750px)").matches) {
    if (!close) {
      menubtn.classList.add("menu");
      menu.style.display = "block";
      icon.classList.remove("fa-solid", "fa-bars"); //移除
      icon.classList.add("fa-solid", "fa-x"); //添加
      close = true;
    } else {
      menu.style.display = "none";
      icon.classList.remove("fa-solid", "fa-x"); //移除
      icon.classList.add("fa-solid", "fa-bars"); //添加
      close = false;
    }
  }

  //(menu)
  // 將每個a元素設置點擊事件
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
      close = false; // 重置close變數
      icon.classList.remove("fa-solid", "fa-x"); //移除
      icon.classList.add("fa-solid", "fa-bars"); //添加
      menu.style.display = "none"; // 點擊時隱藏menu元素
    });
  }
});

//(scroll)
let links = document.querySelectorAll('a[href^="#"]');
let headerHeight = 100; // header高度

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();
    let targetId = links[i].getAttribute("href");
    let targetElement = document.querySelector(targetId);
    let targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
}
