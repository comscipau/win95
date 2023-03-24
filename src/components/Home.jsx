import React, { useState } from "react";
import Clock from "react-live-clock";

import WIN1 from "../assets/win1.png";
import WIN2 from "../assets/win2.png";
import WIN3 from "../assets/win3.png";
import WIN4 from "../assets/win4.png";
import WIN5 from "../assets/win5.png";
import LOGO from "../assets/winLogo.png";
import Window from "./Window";

const Home = () => {
  const [showWindow, setShowWindow] = useState(false);
  const closeWindow = () => {
    setShowWindow(false);
  };

  let clicks = [];
  let timeout;

  function singleClick(event) {
    // alert("single click");
  }

  function doubleClick(event) {
    setShowWindow(true);
  }

  function clickHandler(event) {
    event.preventDefault();
    clicks.push(new Date().getTime());
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      if (
        clicks.length > 1 &&
        clicks[clicks.length - 1] - clicks[clicks.length - 2] < 500
      ) {
        doubleClick(event.target);
      } else {
        singleClick(event.target);
      }
    }, 500);
  }

  return (
    <div className="bg-[#008080] h-screen overflow-hidden m-0 text-white font-W95FA font-thin pt-4 relative">
      <div className="w-24 ml-4">
        <div
          className="flex flex-col items-center hover:cursor-default"
          onClick={clickHandler}
        >
          <img src={WIN1} alt="WIN1" className="h-10 w-10" />
          <p className="mt-1">My Computer</p>
        </div>

        <div
          className="flex flex-col items-center mt-8 hover:cursor-default"
          onClick={clickHandler}
        >
          <img src={WIN2} alt="WIN2" className="h-10 w-10" />
          <p className="text-center mt-1">
            Network
            <br />
            Neighborhood
          </p>
        </div>

        <div
          className="flex flex-col items-center mt-8 hover:cursor-default"
          onClick={clickHandler}
        >
          <img src={WIN3} alt="WIN3" className="h-10 w-10" />
          <p className="mt-1">Inbox</p>
        </div>

        <div
          className="flex flex-col items-center mt-8 hover:cursor-default"
          onClick={clickHandler}
        >
          <img src={WIN4} alt="WIN4" className="h-10 w-10" />
          <p className="mt-1">Recycle Bin</p>
        </div>
      </div>

      <Window visible={showWindow} onClose={closeWindow} />

      <div className="absolute bottom-0 winBoxShadow h-10 w-full flex items-center justify-between">
        <button className="flex items-center winBoxShadow px-2 ml-1">
          <img src={LOGO} alt="LOGO" className="h-8" />
          <p className="text-black font-bold ml-1">Start</p>
        </button>
        <div className="timeBoxShadow px-2 py-1 mr-1 flex items-center">
          <img src={WIN5} alt="win5" className="h-6 mr-4" />
          <Clock
            style={{ fontSize: "1rem", color: "black" }}
            format={"h:mm A"}
            ticking={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
