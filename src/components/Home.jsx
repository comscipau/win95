import React, { useState } from "react";
import Clock from "react-live-clock";

import WIN1 from "../assets/computer.png";
import WIN2 from "../assets/win2.png";
import WIN5 from "../assets/win5.png";
import LOGO from "../assets/aPlusLogo.png";

import Window from "./Window";
import Menu from "./Menu";

const Home = () => {
  const [showWindow, setShowWindow] = useState(false);
  const closeWindow = () => {
    setShowWindow(false);
  };

  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => {
    setShowMenu(false);
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
          className="flex flex-col items-center hover:cursor-pointer"
          onClick={clickHandler}
        >
          <img src={WIN1} alt="WIN1" className="h-10 w-10" />
          <p className="mt-1">My A++</p>
        </div>

        <div
          className="flex flex-col items-center mt-8 hover:cursor-pointer"
          onClick={clickHandler}
        >
          <img src={WIN2} alt="WIN2" className="h-10 w-10" />
          <p className="text-center mt-1">
            Connect
            <br />
            Wallet
          </p>
        </div>

        {/* <div
          className="flex flex-col items-center mt-8 hover:cursor-default"
          onClick={clickHandler}
        >
          <img src={WIN1} alt="WIN1" className="h-10 w-10" />
          <p className="mt-1">Inbox</p>
        </div>

        <div
          className="flex flex-col items-center mt-8 hover:cursor-default"
          onClick={clickHandler}
        >
          <img src={WIN2} alt="WIN4" className="h-10 w-10" />
          <p className="mt-1">Recycle Bin</p>
        </div> */}
      </div>

      {showWindow && <Window visible={showWindow} onClose={closeWindow} />}
      {showMenu && <Menu visible={showMenu} onClose={closeWindow} />}

      <div className="absolute bottom-0 winBoxShadow h-10 w-full flex items-center justify-between">
        <button
          className="flex items-center justify-center btnBoxShadow px-2 ml-1 h-8 w-16"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src={LOGO} alt="LOGO" className="h-7 py-[2px]" />
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
