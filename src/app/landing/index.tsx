"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Hero from "./components/hero";
import Projects from "./components/projects";

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function Landing() {
  const parallax = useRef<IParallax>(null!);
  const parallaxProject = useRef<IParallax>(null!);

  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "30%", marginLeft: "5%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={0.6} style={{ opacity: 0.1 }}>
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "20%", marginLeft: "4%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.2 }}>
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "25%", marginLeft: "26%" }}
          />
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.3 }}>
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={"/assets/cloud.svg"}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(/assets/stars.svg)",
            backgroundSize: "cover",
          }}
        >
          {/* <Hero /> */}
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0, end: 3 }}>
          <div className="flex items-center justify-center h-screen">
            <Hero />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(/assets/stars.svg)",
            backgroundSize: "cover",
          }}
        >
          {/* <Hero /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.6}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(/assets/stars.svg)",
            backgroundSize: "cover",
          }}
        >
          {/* <Hero /> */}
          {/* <div className="bg-black bg-gradient-to-t from-white to-black h-screen w-full">
            haha
          </div> */}
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.6}
          sticky={{ start: 3, end: 3 }}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(/assets/stars.svg)",
            backgroundSize: "cover",
          }}
        >
          {/* <Hero /> */}
          {/* <div className="bg-black bg-gradient-to-t from-white to-black h-screen w-full"> */}
          <div className="bg-[#151c1e] min-h-screen w-full">
            {/* <Projects /> */}
            {/* <Parallax pages={1}>
              
            </Parallax> */}
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
