"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Typewriter from "typewriter-effect";
import { poppins, tiny5 } from "../layout";
import Image from "next/image";

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function Landing() {
  const parallax = useRef<IParallax>(null!);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    console.log(`rotateY(${x}deg) rotateX(${-y}deg)`, ">>cek ini");

    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const reset = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ width: "100%", height: "100%", background: "#253237" }}
    >
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <div>
          <div
          // ref={cardRef}
          // style={{ willChange: "transform" }}
          >
            {/* <ParallaxLayer
              offset={0}
              speed={0}
              factor={3}
              style={{
                backgroundImage: url('stars', true),
                backgroundSize: 'cover',
              }}
            /> */}
            <ParallaxLayer
              style={{
                backgroundSize: "cover",
              }}
            >
              <div>
                <img src={url("stars")} style={{ width: "100%" }} />
              </div>
            </ParallaxLayer>
          </div>
        </div>

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={url("earth")} style={{ width: "60%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col items-center text-[90px] space-y-1">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(`Hi, I'm Dennis!`)
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .start();
              }}
            />
            <div className="flex flex-col justify-center items-center space-y-4 w-fit">
              <div
                className={`flex text-center text-[18px] space-x-1 ${poppins.className}`}
              >
                <p>
                  i architect bugs into features & vibes into functions. deploy
                  dreams,{" "}
                </p>
                <p className="text-red-200">not drama.</p>
              </div>
              <div
                ref={cardRef}
                style={{ willChange: "transform" }}
                className="bg-gray-600/30 rounded-full px-12 py-2 w-fit"
              >
                <p className={`text-[18px] ${poppins.className}`}>
                  Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <div className="grid grid-cols-5 content-center gap-4">
            <div className="grid-row-2 col-span-3 space-y-5 w-full overflow-hidden">
              <div className="flex items-center overflow-hidden rounded-r-lg">
                <div
                  className="flex w-full space-x-8"
                  style={{
                    animation: "scroll-linear 20s linear infinite",
                  }}
                >
                  {[...Array(99)].map((_, index) => (
                    <div key={index} className="flex items-center space-x-8">
                      <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[430px] h-[200px]">
                        <Image
                          src={"/projects/alodokter-sgm.png"}
                          alt="alodokter-sgm"
                          fill
                          objectFit="fill"
                        />
                      </div>
                      <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[340px] h-[200px]">
                        <Image
                          src={"/projects/cokran.jpg"}
                          alt="alodokter-sgm"
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[430px] h-[200px]">
                        <Image
                          src={"/projects/sprout.jpg"}
                          alt="alodokter-sgm"
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[350px] h-[200px]">
                        <Image
                          src={"/projects/toco.png"}
                          alt="alodokter-sgm"
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center overflow-hidden rounded-r-lg">
                <div
                  className="flex w-full space-x-8"
                  style={{
                    animation: "scroll-linear-reverse 20s linear infinite",
                  }}
                >
                  {[...Array(99)].map((_, index) => (
                    <div key={index} className="flex items-center space-x-8">
                      <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[340px] h-[200px]">
                        <Image
                          src={"/projects/cokran.jpg"}
                          alt="alodokter-sgm"
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[430px] h-[200px]">
                        <Image
                          src={"/projects/alodokter-sgm.png"}
                          alt="alodokter-sgm"
                          fill
                          objectFit="fill"
                        />
                      </div>
                      <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[350px] h-[200px]">
                        <Image
                          src={"/projects/bouchon.png"}
                          alt="alodokter-sgm"
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[350px] h-[200px]">
                        <Image
                          src={"/projects/toco.png"}
                          alt="alodokter-sgm"
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[350px] h-[200px]">
                        <Image
                          src={"/projects/packet-pulse.png"}
                          alt="alodokter-sgm"
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col items-center justify-center col-span-2 w-full`}
            >
              <p className="text-[60px] text-white font-semibold">
                Pixel alchemist
              </p>
              <p className={`${poppins.className} text-white`}>
                turning Figma into fast, flawless web apps. 3 years React
                wizardry, clean code addict, always shipping smooth vibes
              </p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          // onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={url("clients-main")} style={{ width: "40%" }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
