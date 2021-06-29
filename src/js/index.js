import gsap from "gsap";

//text reveal anim
//After elem p
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  gsap.registerPlugin(CSSRulePlugin);
  //gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
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

  let rule = CSSRulePlugin.getRule("span:after");
  console.log(rule);
  gsap.to(rule, { duration: 5, cssRule: { scaleY: 0 } });
  //pseudo element is going from down to up, and eventually to scale 0
});
