document.body.onload = (arguments) => {
  console.log("Hello, world!");
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
};
