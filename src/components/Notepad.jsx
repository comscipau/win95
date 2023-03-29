import React from "react";
import Draggable from "react-draggable";
import CLOSE from "../assets/Close.svg";

const Notepad = ({ visible, onClose }) => {
  return (
    <div
      className={`${
        // visible ? "fixed inset-0 flex justify-center items-center" : "hidden"
        visible ? "absolute left-[40.5%] top-[27%]" : "hidden"
      }`}
    >
      <Draggable handle="#note">
        <div className="w-64 px-1 py-1 text-black h-fit dialogBoxShadow font-W95FA">
          <div
            className="flex items-center justify-between bg-primary"
            id="note"
          >
            <p className="text-white font-thin py-[1px] ml-1">
              Untitled - Notepad
            </p>
            <div className="mr-1 btnBoxShadow" onClick={onClose}>
              <img
                src={CLOSE}
                alt="CLOSE"
                className="w-[18px] h-[18px] pr-[2px]"
              />
            </div>
          </div>
          <div className="flex gap-3 ml-2 text-sm">
            <p>
              <span className="underline">F</span>ile
            </p>
            <p>
              <span className="underline">E</span>dit
            </p>
            <p>
              <span className="underline">S</span>earch
            </p>
            <p>
              <span className="underline">H</span>elp
            </p>
          </div>
          <div className="flex justify-center">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={"Hello readers!"}
              className="w-[98%] redeemInput px-1 mb-1 outline-none"
            ></textarea>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Notepad;
