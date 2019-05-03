window.onload = register;
export default function register() {
  dotFollow();
  imageRotate();
  yellowBall();
  scrollDown();
  defaultAnimation();
  navBodyAnimation();
  scroolUp();
  menuDisplay();
}
function dotFollow() {
  let oTop: number;
  let oLeft: number;
  let myDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".dot");
  function eventHandle(ev: MouseEvent) {
    oTop = ev.clientY;
    oLeft = ev.clientX;
    myDiv.style.display = "block";
    myDiv.style.position = "absolute";
    myDiv.style.left = oLeft.toString() + "px";
    myDiv.style.top =
      (oTop + document.documentElement.scrollTop).toString() + "px";
  }
  window.onmousemove = eventHandle;
  window.onscroll = e => {
    let scrolloTop;
    myDiv.style.display = "block";
    myDiv.style.position = "absolute";
    myDiv.style.top = (oTop + window.scrollY).toString() + "px";
    myDiv.style.left = (oLeft + window.scrollX).toString() + "px";
  };
  window.onmousedown = e => {
    myDiv.style.width = "8px";
    myDiv.style.height = "8px";
    myDiv.style.background = "black";
  };
  window.onmouseup = e => {
    myDiv.style.width = "15px";
    myDiv.style.height = "15px";
    myDiv.style.background = "yellow";
  };
}
function imageRotate() {
  let header: HTMLDivElement;
  let pic: HTMLImageElement;
  header = <HTMLDivElement>document.querySelector(".header");
  pic = <HTMLImageElement>document.querySelector(".headerPic");
  header.addEventListener("mousemove", ev => {
    // console.log("我还活着");
    let degree: number = (Math.atan2(ev.clientY, ev.clientX) / Math.PI) * 180;
    pic.style.transform = `rotate(${degree}deg)`;
  });
}
function yellowBall() {
  let move: HTMLDivElement;
  move = <HTMLDivElement>document.querySelector(".yellowBall");
  let oTop: number;
  let oLeft: number;
  let hidden: boolean;
  let animationNow: boolean;
  hidden = false;
  move.addEventListener("mousemove", ev => {
    // console.log(1);

    if (hidden) {
      return;
    }

    oTop = ev.clientY - 60;
    oLeft = ev.clientX - 130;
    move.style.position = "fixed";
    if (ev.clientY < 100 && ev.clientY > 30) {
      move.style.top = (oTop + window.scrollY).toString() + "px";
    }
    if (ev.clientX > 90 && ev.clientX < 150) {
      move.style.left = oLeft.toString() + "px";
    }
  });
  move.addEventListener("mouseout", () => {
    // console.log(2);

    if (hidden) {
      return;
    }
    move.style.top = "0";
    move.style.left = "0";
  });

  animationNow = false;
  window.addEventListener("scroll", ev => {
    // console.log(3);

    if (animationNow) {
      return;
    }
    if (window.scrollY > 100) {
      move.classList.remove("yellowBallDisplay");
      move.classList.add("yellowBallHidden");
      move.style.top = "-150px";
      hidden = true;
      // animationNow = true;
      // setTimeout(() => {
      //   animationNow = false;
      // }, 1500);
    } else if (hidden && window.scrollY < 150) {
      move.classList.remove("yellowBallHidden");
      move.classList.add("yellowBallDisplay");
      move.style.top = "0";
      hidden = false;
      // animationNow = true;
      // setTimeout(() => {
      //   animationNow = false;
      // }, 1000);
    }
  });
}
function scrollDown() {
  function scroll() {
    const spacingTime = 5;
    let time = 1500;
    let h =
      Math.max(document.documentElement.clientHeight, window.innerHeight || 0) /
      100;
    let spacingInex = time / spacingTime;
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop;
    let everTop = (100 * h - nowTop) / spacingInex;
    let scrollTimer = setInterval(() => {
      if (spacingInex > 0) {
        spacingInex--;
        scrollTo(0, (nowTop += everTop));
      } else {
        clearInterval(scrollTimer);
      }
    }, spacingTime);
  }
  (<HTMLDivElement>document.querySelector(".headerRight")).addEventListener(
    "click",
    () => {
      scroll();
    }
  );
}
function scroolUp() {
  function scrollup() {
    const spacingTime = 5;
    let time = 1000;
    let spacingInex = time / spacingTime;
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop;
    let everTop = (0 - nowTop) / spacingInex;
    let scrollTimer = setInterval(() => {
      if (spacingInex > 0) {
        spacingInex--;
        scrollTo(0, (nowTop += everTop));
      } else {
        clearInterval(scrollTimer);
      }
    }, spacingTime);
  }
  (<HTMLDivElement>document.querySelector(".toTopButton")).addEventListener(
    "click",
    () => {
      scrollup();
    }
  );
}
function defaultAnimation() {
  let classArray: string[];
  classArray = [
    ".headerTitle",
    ".headerIntroduction",
    ".scheduleH",
    ".scheduleLine1",
    ".scheduleLine2",
    ".scheduleBottom",
    ".venueH",
    ".venueCenterLeft",
    ".venueCenterCenter",
    ".venueCenterRight",
    ".venueBottom",
    ".programH",
    ".programBottom"
  ];
  for (let className of classArray) {
    let element: HTMLElement = <HTMLElement>document.querySelector(className);
    element.style.opacity = "0";
    if (element.getBoundingClientRect().top <= window.innerHeight) {
      element.classList.add("defaultAnimation");
      element.style.opacity = "1";
    }
    window.addEventListener("scroll", () => {
      if (element.getBoundingClientRect().top <= window.innerHeight) {
        element.classList.add("defaultAnimation");
        element.style.opacity = "1";
      }
    });
  }
}
function navBodyAnimation() {
  let navBody: HTMLDivElement = <HTMLDivElement>(
    document.querySelector(".fixNav")
  );
  let defaultHeight: number=250;
  window.addEventListener("scroll", ev => {
    if (window.scrollY < 200) {
      navBody.style.top = (defaultHeight - window.scrollY).toString() + "px";
    }
  });
}
function menuDisplay() {
  let menuButton: HTMLDivElement = <HTMLDivElement>(
    document.querySelector(".menuButton")
  );
  let menu: HTMLDivElement = <HTMLDivElement>document.querySelector(".menu");
  menuButton.addEventListener("click", ev => {
    if (menuButton.textContent === "MENU") {
      menu.style.zIndex = "2";
      menu.style.transition = "1s";
      menuButton.textContent = "CLOSE";
      menu.style.opacity = "1";
    } else {
      if (menuButton.textContent === "CLOSE") {
        menu.style.zIndex = "-1";
        menuButton.textContent = "MENU";
        menu.style.opacity = "0";
      }
    }
  });
}
