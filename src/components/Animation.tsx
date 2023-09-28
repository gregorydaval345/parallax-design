"use client";
import { useEffect } from "react";
import Image from "next/image";
import "./animation.css";

export default function Animation() {
  useEffect(() => {
    const scrollAnim = document.querySelector(
      ".scroll-animation"
    ) as HTMLElement;
    const scrollText = document.querySelector(".scroll-text") as HTMLElement;

    if (scrollAnim && scrollText) {
      window.addEventListener("scroll", () => {
        const verticalScrollPx = window.scrollY || window.pageYOffset;

        if (
          verticalScrollPx > window.innerHeight * 1.5 &&
          verticalScrollPx < window.innerHeight * 2.5
        ) {
          // scrollAnim.style.transition = "background-color 0.5s ease";
          scrollAnim.style.transition =
            "background-color 1s cubic-bezier(0.68, -0.55, 0.50, 1.55), opacity 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
          scrollAnim.style.backgroundColor = "#E7E5E3";
          scrollText.style.color = "white";
        } else if (
          verticalScrollPx > window.innerHeight * 2.5 &&
          verticalScrollPx < window.innerHeight * 3.5
        ) {
          scrollAnim.style.backgroundColor = "#4C0048";
        } else {
          scrollAnim.style.backgroundColor = "white";
          scrollText.style.color = "#E7E5E3";
        }
      });
    }
  }, []);

  return (
    <div className="scroll-animation">
      <div className="scroll-text flex justify-center items-center text-sm sm:text-sm lg:text-3xl">
        <h2>Woof Woof</h2>
      </div>
      <div className="animation-content flex flex-col md:flex-row">
        <div className="image">
          <img
            src="/assets/woof-1.png"
            alt="woof-1"
            className="w-full md:w-2/4"
          />
        </div>
        <div className="w-fit h-screen flex justify-center items-center">
          <img
            src="/assets/woof-2.png"
            alt="woof-1"
            className="w-full md:w-2/4"
          />
        </div>
        <div className="image">
          <img
            src="/assets/woof-3.png"
            alt="woof-1"
            className="w-full md:w-2/4"
          />
        </div>
      </div>
    </div>
  );
}
