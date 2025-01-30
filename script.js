// APPLY GSAP ANIMATION

//  FOR LOADER
const loader = () => {
  var tl = gsap.timeline();
  tl.to("#full", { height: 0, duration: 2, ease: Expo.easeInOut });

  tl.to("#elem", {
    bottom: "0",
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut,
    height: "100%",
  });
  tl.to("#white", {
    bottom: "0",
    duration: 2,
    delay: -1.7,
    ease: Expo.easeInOut,
    height: "100%",
  });
  tl.to("#home", {
    duration: 12,
    display: "block",
    delay: -1.5,
    ease: Expo.easeInOut,
    height: "100%",
  });
};
loader();

// FOR HOME PAGE
const home = () => {
  gsap.set("#nav", {
    y: "-100%",
    opacity: 0,
  });
  gsap.set(".reveal1", {
    opacity: 0, //Zerror
  });
  gsap.set(".reveal2", {
    opacity: 0, //Studios
  });
  gsap.set(".reveal3", {
    opacity: 0, //Our local time
  });
  gsap.set(".reveal3", {
    opacity: 0, //Let's make some
  });
  gsap.set(".reveal3", {
    opacity: 0, //Creative
  });

  gsap.to("#nav", {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 1,
    ease: Expo.easeInOut,
  });

  gsap.to(".reveal1", {
    y: "-10%",
    opacity: 1,
    // stagger: 2,
    duration: 1.2,
    delay: 2,
    ease: Expo.easeInOut,
  });
  gsap.to(".reveal2", {
    opacity: 1,
    y: "-20%",
    // stagger: 2,
    duration: 1.2,
    delay: 3,
    ease: Expo.easeInOut,
  });
  gsap.to(".reveal3", {
    opacity: 1,

    duration: 1,
    delay: 4,
    ease: Expo.easeInOut,
  });
};
home();
