import gsap from "gsap";
import { selector } from "gsap/gsap-core";

let t1 = null;

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  gsap.registerPlugin(CSSRulePlugin);

  t1 = createTimeline();

  // setTimeout(() => {
  //   t1.pause();
  // }, 4000);

  //   document.getElementById("cta").addEventListener("click", () => {
  //     if (t1.reversed()) {
  //       t1.play();
  //     } else {
  //       t1.reverse();
  //       setTimeout(() => {
  //         t1.play();
  //       }, 2000);
  //     }
  //   });\

  window.addEventListener("mousemove", (e) => {
    Curson.move(".cursor-circle", e);
  });
});

const Curson = {
  move: (selector, evt) => {
    gsap.to(selector, {
      left: evt.pageX,
      top: evt.pageY,
      ease: "back.out(1.7)",
    });
  },
};

const createTimeline = function () {
  let rule = CSSRulePlugin.getRule("span:after");

  let t1 = gsap.timeline({
    defaults: {
      duration: 5,
    },
  });

  //ekta shesh hoile arekta hobe, so aage vaage korte chaile add "-=2.2"
  t1.from(".bg-full", {
    opacity: 0,
    duration: 10,
  })
    .from(
      ".bg-full .bg-img-1",
      {
        opacity: 0,
        duration: 10,
        scale: 1.5,
        x: 100,
        y: 100,
      },
      "-=10"
    )
    .to(".bg-full .bg-img-1", {
      opacity: 0,
      duration: 7,
    })
    .from(
      ".main-header",
      {
        duration: 7,
        opacity: 0,
        ease: "elastic",
      },
      "-=8"
    )
    .from(
      ".sub-header",
      {
        duration: 7,
        opacity: 0,
        ease: "elastic",
      },
      "-=5"
    )
    .to(".bg-full .bg-img-2", {
      opacity: 1,
      duration: 20,
      display: "block",
    })
    .from(".cursor-circle", {
      opacity: 0,
      duration: 3,
    });

  return t1;
};
