import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";

import WIN1 from "../assets/computer.png";
import WIN3 from "../assets/win3.png";
import WIN5 from "../assets/win5.png";
import LOGO from "../assets/aPlusLogo.png";
import REDEEM from "../assets/Holding.ico";
import DOCS from "../assets/Docs.ico";
import NOTE from "../assets/Notepad.ico";

import Window from "./Window";
import Menu from "./Menu";
import MenuWindow from "./MenuWindow";
import MyAPlusWindow from "./MyAPlusWindow";
import PrintAPlusWIndow from "./PrintAPlusWindow";
import RedeemAPlusWIndow from "./RedeemAPlusWIndow";
import Inbox from "./Inbox";
import Notepad from "./Notepad";

const Home = () => {
  const [welcomeDiv, setWelcomeDiv] = useState(
    localStorage.getItem("welcome") ? localStorage.getItem("welcome") : true
  );

  const [showWindow, setShowWindow] = useState(true);
  const closeWindow = () => {
    setShowWindow(false);
  };

  const [showMenuWindow, setShowMenuWindow] = useState(false);
  const closeMenuWindow = () => {
    setShowMenuWindow(false);
  };

  const [showMyAPlus, setShowMyAPlus] = useState({ show: false, zIndex: 10 });
  const closeMyAPlus = () => {
    console.log("close");
    setShowMyAPlus({ ...showMyAPlus, show: false });
  };

  const [showPrintAPlus, setShowPrintAPlus] = useState(false);
  const closePrintAPlus = () => {
    setShowPrintAPlus(false);
  };

  const [showRedeemAPlus, setShowRedeemAPlus] = useState(false);
  const closeRedeemAPlus = () => {
    setShowRedeemAPlus(false);
  };

  const [showMail, setShowMail] = useState(false);
  const closeMail = () => {
    setShowMail(false);
  };

  const [showNotepad, setShowNotedpad] = useState(false);
  const closeNotepad = () => {
    setShowNotedpad(false);
  };

  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = (e) => {
    setShowMenu(false);
    // console.log(e);
    if (e === "About Us") {
      setShowMenuWindow(true);
    }
  };

  let clicks = [];
  let timeout;

  function singleClick(event) {
    // alert("single click");
  }

  function doubleClick(data) {
    // setShowWindow(true);
    switch (data) {
      case "my a++":
        setShowMyAPlus({ ...showMyAPlus, show: true });
        break;
      case "redeem a++":
        setShowRedeemAPlus(true);
        break;
      case "a++ printer":
        setShowPrintAPlus(true);
        break;
      case "my email":
        setShowMail(true);
        break;
      case "welcome":
        setShowNotedpad(true);
        break;

      default:
        break;
    }
  }

  function clickHandler(event, data) {
    event.preventDefault();
    clicks.push(new Date().getTime());
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      if (
        clicks.length > 1 &&
        clicks[clicks.length - 1] - clicks[clicks.length - 2] < 500
      ) {
        doubleClick(data);
        // console.log(data);
      } else {
        singleClick(event.target);
      }
    }, 500);
  }
  useEffect(() => {
    // console.log(localStorage.welcome);
    if (localStorage.welcome) {
      // console.log("a");
      setShowWindow(false);
    } else {
      setShowWindow(true);
      // console.log("b");
    }
  }, []);

  return (
    <div className="bg-[#008080] h-screen overflow-hidden m-0 text-white font-W95FA font-thin pt-4 relative">
      <div className="w-24 ml-2 lg:ml-4">
        <div
          className="flex flex-col items-center hover:cursor-pointer"
          onClick={(e) => clickHandler(e, "my a++")}
        >
          <img src={WIN1} alt="WIN1" className="w-10 h-10" />
          <p className="mt-1">My A++</p>
        </div>

        <div
          className="flex flex-col items-center mt-7 hover:cursor-pointer"
          onClick={(e) => clickHandler(e, "a++ printer")}
        >
          <img src={WIN5} alt="WIN5" className="w-10 h-10" />
          <p className="mt-1 text-center">A++ Printer</p>
        </div>

        <div
          className="flex flex-col items-center mt-7 hover:cursor-pointer"
          onClick={(e) => clickHandler(e, "redeem a++")}
        >
          <img src={REDEEM} alt="REDEEM" className="w-10 h-10" />
          <p className="mt-1 text-center">Redeem A++</p>
        </div>

        <div
          className="flex flex-col items-center mt-7 hover:cursor-pointer"
          onClick={(e) => clickHandler(e, "my email")}
        >
          <img src={WIN3} alt="WIN3" className="w-10 h-10" />
          <p className="mt-1 text-center">My Email</p>
        </div>

        <div
          className="flex flex-col items-center mt-7 hover:cursor-pointer"
          onClick={(e) => clickHandler(e, "docs")}
        >
          <img src={DOCS} alt="DOCS" className="w-10 h-10" />
          <p className="mt-1 text-center">Docs</p>
        </div>

        <div
          className="flex flex-col items-center mt-7 hover:cursor-pointer"
          onClick={(e) => clickHandler(e, "welcome")}
        >
          <img src={NOTE} alt="NOTE" className="w-10 h-10" />
          <p className="mt-1 text-center">Welcome</p>
        </div>
      </div>

      {showWindow && <Window visible={showWindow} onClose={closeWindow} />}
      {showMyAPlus.show && (
        <MyAPlusWindow visible={showMyAPlus} onClose={closeMyAPlus} />
      )}
      {showPrintAPlus && (
        <PrintAPlusWIndow visible={showPrintAPlus} onClose={closePrintAPlus} />
      )}
      {showRedeemAPlus && (
        <RedeemAPlusWIndow
          visible={showRedeemAPlus}
          onClose={closeRedeemAPlus}
        />
      )}
      {showMail && <Inbox visible={showMail} onClose={closeMail} />}
      {showNotepad && <Notepad visible={showNotepad} onClose={closeNotepad} />}
      {showMenuWindow && (
        <MenuWindow visible={showMenuWindow} onClose={closeMenuWindow} />
      )}
      <Menu visible={showMenu} onClose={closeMenu} />

      <div className="absolute bottom-0 flex items-center justify-between w-full h-10 winBoxShadow z-50">
        <button
          className="flex items-center justify-center w-16 h-8 px-2 ml-1 btnBoxShadow"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src={LOGO} alt="LOGO" className="h-7 py-[2px]" />
        </button>
        <div className="flex items-center px-2 py-1 mr-1 timeBoxShadow">
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
