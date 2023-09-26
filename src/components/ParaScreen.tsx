"use client";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useScroll, animated } from "@react-spring/web";
// import Woof1 from "../../public/assets/woof-1.png";
// import Woof2 from "../../public/assets/woof-2.png";
// import Woof3 from "../../public/assets/woof-3.png";

const ParaScreen = () => {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={0.7}
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="flex min-h-screen items-center justify-center  bg-cover bg-fixed bg-center bg-no-repeat">
            <h1 className="text-6xl text-black">Section 1</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.9}
          speed={0.7}
          style={{ backgroundColor: "#E7E5E2" }}
        >
          <div className="flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat">
            <h1 className="text-6xl text-black">Section 2</h1>
          </div>{" "}
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.3}
          style={{ backgroundColor: "#4C0048" }}
        >
          <div className="flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat">
            <h1 className="text-6xl text-white">Section 3</h1>
          </div>{" "}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParaScreen;
