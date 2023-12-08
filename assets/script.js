document.body.onload = (arguments) => {
  window.navigateScroll = (id) => {
    const target = document.getElementById(id);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return false;
  };
  const wrapper = document.getElementById("wrapper");
  var isOnWelcome = true;
  wrapper.onscroll = (args) => {
    if (args.target.scrollTop >= args.target.clientHeight - 100) {
      if (isOnWelcome) {
        isOnWelcome = false;
        console.log("Scrolled past welcome section!");
        console.log(document.getElementsByTagName("nav"));
        document.getElementsByTagName("nav")[0].classList.add("inverted");
        document.getElementById("nav-bg").classList.add("opacity-100");
      }
    } else {
      if (!isOnWelcome) {
        isOnWelcome = true;
        console.log("Scrolled back to welcome section!");
        document.getElementsByTagName("nav")[0].classList.remove("inverted");
        document.getElementById("nav-bg").classList.remove("opacity-100");
      }
    }
  };
  let particlesFile = "assets/particles.json";
  let month = new Date().getMonth() + 1;
  const snowMonths = [11, 12, 1, 2];
  if (snowMonths.includes(month)) {
    particlesFile = "assets/snow.json";
  }

  // Mobile for performance
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
  ) {
    if (snowMonths.includes(month)) {
      particlesFile = "assets/snow-mobile.json";
    } else {
      particlesFile = "assets/mobile.json";
    }
  }

  particlesJS.load("particles", particlesFile, function () {
    console.log("callback - particles.js config loaded (mobile)");
  });
  window.xyz = () => {
    let x = "bWFpbHRvOm1hcnZpbkBrdXJvY2suaW8=";
    let y = atob(x);
    window.location.href = y;
    return false;
  };
};
