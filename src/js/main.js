import gsap from "gsap";

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
  //   });
});

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
    });
  // .to(
  //   ".main-header",
  //   {
  //     duration: 8,
  //     color: "red",
  //   },
  //   "-=5"
  // )
  // .to(
  //   ".sub-header",
  //   {
  //     duration: 8,
  //     color: "red",
  //   },
  //   "-=5"
  // );

  return t1;
};
