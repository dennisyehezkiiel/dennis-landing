"use client";
import { poppins } from "@/app/layout";
import BlurryCursor from "@/components/cursor";
import { useRef, useState } from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [isActive, setIsActive] = useState(false);
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
    <>
      <BlurryCursor isActive={isActive} />
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        className="flex flex-col items-center text-[90px] space-y-1"
      >
        <div
          onMouseOver={() => {
            setIsActive(true);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        >
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
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 w-fit">
          <div
            onMouseOver={() => {
              setIsActive(true);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
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
    </>
  );
};

export default Hero;
