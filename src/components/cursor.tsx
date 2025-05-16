"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlurryCursor({ isActive }: any) {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circle = useRef<any>(null);
  const size = isActive ? 400 : 30;

  const lerp = (x: any, y: any, a: any) => x * (1 - a) + y * a;

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate) as any;
  };

  const moveCircle = (x: any, y: any) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current as any);
    };
  }, [isActive]);

  return (
    <div className="relative">
      <div
        style={{
          backgroundColor: "#457ec4",
          width: size,
          height: size,
          filter: `blur(${isActive ? 30 : 0}px)`,
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
        className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none"
        ref={circle}
      />
    </div>
  );
}
