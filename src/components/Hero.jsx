import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"; // requires Club GreenSock
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef(null);
  const videoTimeLineRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
    });

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          bottom: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
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

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
