document.body.onload = (arguments) => {
  console.log("Hello, world!");
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
        document.getElementById("nav-bg").classList.add("nav-bg-colored");
      }
    } else {
      if (!isOnWelcome) {
        isOnWelcome = true;
        console.log("Scrolled back to welcome section!");
        document.getElementsByTagName("nav")[0].classList.remove("inverted");
        document.getElementById("nav-bg").classList.remove("nav-bg-colored");
      }
    }
  };
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
  ) {
    particlesJS.load("particles", "assets/mobile.json", function () {
      console.log("callback - particles.js config loaded (mobile)");
    });
  } else {
    particlesJS.load("particles", "assets/particles.json", function () {
      console.log("callback - particles.js config loaded");
    });
  }
};
