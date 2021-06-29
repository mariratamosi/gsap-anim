import gsap from "gsap";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  gsap.from(".anim1", {
    opacity: 0,
    duration: 1,
    y: -50, //go down
    ease: "Power2.easeInOut",
    stagger: 0.6,
  });

  gsap.from("img", {
    duration: 1,
    y: 30, //go up
    opacity: 0,
    delay: 1.4,
  });

  gsap.from("aside", {
    duration: 1,
    opacity: 0,
    backgroundPosition: "200px 0px",
    delay: 1.1,
  });
});
