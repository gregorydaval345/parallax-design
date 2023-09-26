"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../styles.module.css"; // Import the CSS module

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ num }: any) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div ref={ref}>
      <motion.div
        className={styles.box} // Use the CSS class from the module
        variants={boxVariant}
        initial={{ x: "100vw" }}
        animate={control}
      >
        <h1>Box {num} </h1>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div
      className={styles.App}
      style={{ height: "100vh", overflowY: "scroll" }}
    >
      {/* Add more content here */}
      <Box num={1} />
      <Box num={2} />
      <Box num={3} />
    </div>
  );
}
