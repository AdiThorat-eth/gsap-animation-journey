import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });
    const paraSplit = new SplitText(".subtitle", {
      type: "lines",
    });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    })

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger : 0.06,
      delay: 1,
    })

  }, []);

  return (
    <>
      <div id="hero" className="noisy">
        <h1 className="title">Sarbat</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Classic. Cool</p>
              <p className="subtitle">
                Just drink it <br /> with friends
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                {" "}
                Refreshing authentic sarbats and creative cocktails – blending
                tradition, natural flavors, and modern twists in every sip{" "}
              </p>
              <a href="#cocktails">View drinks</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
