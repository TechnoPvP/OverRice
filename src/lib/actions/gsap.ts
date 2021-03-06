export let to = async (node: HTMLElement, options: any) => {
  const { gsap, ScrollTrigger } = await import('gsap/all')
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(node, options)
}

export const fadeIn = async (node) => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger)

  // node.style.display = "block";
  let initalDelay = 0.2;
  let delayIncrement = 0.4;

  // for (let x = 0; x < node.children.length; x++) {
  //   initalDelay += delayIncrement;

  //   gsap.from(node.children[x], {
  //     opacity: 0,
  //     delay: initalDelay,
  //     y: "-=20",
  //     duration: 0.5,
  //     stagger: 0.4,
  //   });
  // }


  ScrollTrigger.create({
    trigger: node,
    animation: gsap.from(node, {
      opacity: 0,
      y: "-=50",
      duration: 0.6,
      ease: 'easeout'
    }),
    start: "top bottom-=10%",
    end: "bottom top+=10%",
    toggleActions: 'play reverse play reverse',
  })
};