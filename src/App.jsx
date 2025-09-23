import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      <h1 className="text-5xl text-red-400 flex-center"> Yohohoho </h1>
    </div>
  );
};

export default App;
