import React from "react";
import Draggable from "react-draggable";
import CLOSE from "../assets/Close.svg";

const Window = ({ visible, onClose }) => {
  return (
    <div
      className={`${
        visible ? "fixed inset-0 flex justify-center items-center" : "hidden"
      }`}
    >
      <Draggable handle="#navbar">
        <div className="h-fit dialogBoxShadow w-64 px-1 py-1">
          <div
            className="bg-primary flex items-center justify-between"
            id="navbar"
          >
            <p className="text-white font-W95FA font-bold py-[1px] ml-[2px]">
              Welcome
            </p>
            <div className="btnBoxShadow mr-1" onClick={onClose}>
              <img
                src={CLOSE}
                alt="CLOSE"
                className="w-[18px] h-[18px] pr-[2px]"
              />
            </div>
          </div>
          <div className="h-20"></div>
        </div>
      </Draggable>
    </div>
  );
};

export default Window;
