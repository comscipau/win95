import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { motion } from "framer-motion";

import LOGO from "../src/assets/aPlusLogo.png";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const closeLoading = () => {
    setShowLoading(false);
  };

  const [showHome, setShowHome] = useState(false);
  const openHome = () => {
    setShowHome(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      closeLoading();
    }, 3000);

    const timer2 = setTimeout(() => {
      openHome();
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  const fadeOut = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: 2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      {showLoading && (
        <motion.div
          variants={fadeOut}
          initial="visible"
          animate="hidden"
          viewport={{ once: true }}
          className="fixed inset-0 bg-loadingScreen bg-cover z-[99] flex justify-center items-center"
        >
          <img src={LOGO} alt="logo" className="lg:hidden block w-[80%]" />
        </motion.div>
      )}
      {showHome && <Home />}
    </div>
  );
}

export default App;
