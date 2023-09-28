"use client";
import { useEffect } from "react";
import Image from "next/image";
import "./animation.css";

export default function Animation() {
  // This is a React hook that is executed after the component renders.
  useEffect(() => {
    /**
     *  It selects an HTML element with the class "scroll-animation" and
     * assigns it to the scrollAnim variable. This element is expected to be animated.
     */
    const scrollAnim = document.querySelector(
      ".scroll-animation"
    ) as HTMLElement;
    /**
     * Similarly, it selects an HTML element with the class "scroll-text" and
     * assigns it to the scrollText variable. This element likely contains some text content.
     */
    const scrollText = document.querySelector(".scroll-text") as HTMLElement;

    /**
     *  This checks if both scrollAnim and scrollText elements were successfully found in the DOM.
     * If not, it doesn't proceed with the rest of the code.
     */
    if (scrollAnim && scrollText) {
      /**
       *  It adds a scroll event listener to the window.
       * This function will be executed whenever the user scrolls the page.
       */
      window.addEventListener("scroll", () => {
        /**
         * his line calculates the vertical scroll position in pixels.
         * It uses window.scrollY for modern browsers and window.pageYOffset for older ones.
         */
        const verticalScrollPx = window.scrollY || window.pageYOffset;

        /**
         * If the user is in the first section (between 1.5 and 2.5 times the window's height), it applies an animation to scrollAnim. It changes the background color with a
         *  transition of 1 second and a cubic-bezier easing function. It also changes the text color of scrollText to white.
         * If the user is in the second section (between 2.5 and 3.5 times the window's height), it changes the background color of scrollAnim to "#4C0048".
         * If the user is in neither of these sections, it resets the background color of scrollAnim to white and the text color of scrollText to "#E7E5E3".
         */
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
    /**
     * This empty dependency array [] ensures that the useEffect only runs once,
     * similar to componentDidMount in class-based components.
     * It sets up the scroll listener when the component initially mounts.
     */
  }, []);

  return (
    <div className="scroll-animation">
      <div className="scroll-text flex justify-center items-center">
        <h2 className="text-[160px]">Woof Woof</h2>
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
