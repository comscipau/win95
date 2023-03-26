import React from "react";
import INFO from "../assets/INFO.ico";
import TEAM from "../assets/Users.ico";
import WHITEPAPER from "../assets/Scrap.ico";
import DISCLAIMER from "../assets/Remove_Folder.ico";

const Menu = ({ visible, onClose }) => {
  return (
    <div className={`${visible ? "absolute left-1 bottom-9 z-50" : "hidden"}`}>
      <div className="flex font-W95FA dialogBoxShadow px-1 py-1">
        <div className="bg-[#808082] flex items-end w-[35px] justify-center">
          <p className="-rotate-90 text-4xl text-[#bfbec1] font-bold mb-4">
            A++
          </p>
        </div>
        <div className="text-black font-thin">
          <div
            className="flex items-center py-2 pl-2 pr-6 hover:bg-primary hover:text-white hover:cursor-pointer"
            onClick={() => {
              onClose("About Us");
            }}
          >
            <img src={INFO} alt="INFO" className="mr-2" />
            <p>About Us</p>
          </div>
          <div
            className="flex items-center py-2 pl-2 pr-6 hover:bg-primary hover:text-white hover:cursor-pointer"
            onClick={() => {
              onClose("Team");
            }}
          >
            <img src={TEAM} alt="TEAM" className="pr-2" />
            <p>Team</p>
          </div>
          <div
            className="flex items-center py-2 pl-2 pr-6 hover:bg-primary hover:text-white hover:cursor-pointer"
            onClick={() => {
              onClose("Whitepaper");
            }}
          >
            <img src={WHITEPAPER} alt="WHITEPAPER" className="pr-2" />
            <p>Whitepaper</p>
          </div>
          <div
            className="flex items-center py-2 pl-2 pr-6 hover:bg-primary hover:text-white hover:cursor-pointer"
            onClick={() => {
              onClose("Disclaimer");
            }}
          >
            <img src={DISCLAIMER} alt="DISCLAIMER" className="pr-2" />
            <p>Disclaimer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
