import gsap from "gsap";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  gsap.registerPlugin(CSSRulePlugin);

  let t1 = createTimeline();

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
    scale: 1.5,
    // x: 200,
    // y: 200,
  })
    // .from(
    //   ".bg-full img",
    //   {
    //     opacity: 0,
    //     duration: 10,
    //     scale: 0.5,
    //   },
    //   "-=10"
    // )
    .to(".bg-full", {
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
    .from(".sub-header", {
      duration: 3,
      opacity: 0,
      ease: "elastic",
    });

  return t1;
};
