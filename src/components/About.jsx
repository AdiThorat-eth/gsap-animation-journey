import { useGSAP } from "@gsap/react";
import React from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge"> Best Drinks Ever made</p>
            <h2>
              Where every thing matters<span className="text-white">-</span>
              Even small small details
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every drink we serve is a reflection of our passion, love, and the
              care we pour into it. From selecting the finest ingredients to
              crafting each sip, we put our heart and soul into every
              experience.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.7</span>
                /5
              </p>
              <p className="text-sm text-white-100">
                More than 100K happy customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
            <img src="/images/abt1.png" alt="grid-img1" />
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="noisy">
            <img src="/images/abt2.png" alt="grid-img2" />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="noisy">
            <img src="/images/abt5.png" alt="grid-img5" />
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy">
            <img src="/images/abt3.png" alt="grid-img3" />
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="noisy">
            <img src="/images/abt4.png" alt="grid-img4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
