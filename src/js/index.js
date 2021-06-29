import gsap from "gsap";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  gsap.from(".content", {
    opacity: 0,
    duration: 1,
    y: -50,
    ease: "Power2.easeInOut",
  });
});
