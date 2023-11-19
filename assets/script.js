document.body.onload = (arguments) => {
  console.log("Hello, world!");
  window.navigateScroll = (id) => {
    const target = document.getElementById(id);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
      }
    } else {
      if (!isOnWelcome) {
        isOnWelcome = true;
        console.log("Scrolled back to welcome section!");
        document.getElementsByTagName("nav")[0].classList.remove("inverted");
      }
    }
  };
  particlesJS.load("particles", "assets/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
};
