import gsap from "gsap";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  gsap.registerPlugin(CSSRulePlugin);
  //gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
  //   gsap.from(".anim1", {
  //     opacity: 0,
  //     duration: 1,
  //     y: -50, //go down
  //     ease: "Power2.easeInOut",
  //     stagger: 0.6,
  //   });

  //   gsap.from("img", {
  //     duration: 1,
  //     y: 30, //go up
  //     opacity: 0,
  //     delay: 1.4,
  //   });

  //   gsap.from("aside", {
  //     duration: 1,
  //     opacity: 0,
  //     backgroundPosition: "200px 0px",
  //     delay: 1.1,
  //   });

  //   let rule = CSSRulePlugin.getRule("span:after");
  //   gsap.to(rule, { duration: 5, cssRule: { scaleY: 0 } });
  //pseudo element is going from down to up, and eventually to scale 0

  let t1 = createTimeline();

  document.getElementById("cta").addEventListener("click", () => {
    if (t1.reversed()) {
      t1.play();
    } else {
      t1.reverse();
      setTimeout(() => {
        t1.play();
      }, 2000);
    }
  });
});

const createTimeline = function () {
  let rule = CSSRulePlugin.getRule("span:after");

  let t1 = gsap.timeline({
    defaults: {
      duration: 1,
    },
  });

  //ekta shesh hoile arekta hobe, so aage vaage korte chaile add "-=2.2"
  t1.from(".anim1", {
    y: -50,
    stagger: 0.6,
    opacity: 0,
  })
    .to(
      rule,
      {
        duration: 1.8,
        cssRule: {
          scaleY: 0,
        },
      },
      "-=2.2" //early
    )
    .from(
      "aside",
      {
        opacity: 0,
        backgroundPosition: "200px 0px",
      },
      "-=1.5"
    )
    .from(
      "img",
      {
        y: 30, //go up
        opacity: 0,
      },
      "-=.5"
    );

  return t1;
};
