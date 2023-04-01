import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { motion } from "framer-motion";

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
    }, 5000);

    const timer2 = setTimeout(() => {
      openHome();
    }, 3500);

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
        delay: 4,
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
          className="fixed inset-0 lg:bg-loadingScreen bg-loadingScreenSM bg-stretch z-[99]"
        />
      )}
      {showHome && <Home />}
    </div>
  );
}

export default App;
