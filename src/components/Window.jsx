import React from "react";
import Draggable from "react-draggable";

import CLOSE from "../assets/Close.svg";
import aPlus from "../assets/aPlus.png";
import TIP from "../assets/tip.ico";

const Window = ({ visible, onClose }) => {
  function handleChange(e) {
    let isChecked = e.target.checked;
    localStorage.setItem("welcome", !isChecked);
  }
  return (
    <Draggable handle="#navbar">
      <div
        className={`${
          // visible ? "fixed inset-0 flex justify-center items-center" : "hidden"
          visible
            ? "absolute left-[4%] lg:left-[24%] top-[6%] lg:top-[21%] z-10"
            : "hidden"
        }`}
      >
        <div className="h-fit dialogBoxShadow px-1 py-1">
          <div className="flex items-center justify-between bg-primary">
            <div className="w-[95%] bg-primary" id="navbar">
              <p className="text-white py-[1px] ml-1 font-W95FA">Welcome</p>
            </div>
            <div className="">
              <div className="mr-1 btnBoxShadow" onClick={onClose}>
                <img
                  src={CLOSE}
                  alt="CLOSE"
                  className="w-[18px] h-[18px] pr-[2px] mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="m-4 text-black">
            <div className="text-2xl lg:text-[2rem] font-times font-bold flex items-center mb-1">
              <p>Welcome to</p>
              <img
                src={aPlus}
                alt="aPlus"
                className="w-12 lg:w-16 ml-2 lg:-mt-[2px]"
              />
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="welcomeDiv w-[290px] lg:w-[500px] lg:h-[215px] p-5 lg:p-10 font-W95FA flex mb-3 lg:mb-0 lg:mr-3">
                <img src={TIP} alt="tip" className="h-10" />
                <div className="ml-5">
                  <p className="font-bold mb-5 pt-3">Did you know...</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  className="disabledBtn disabledText py-1 px-5"
                  disabled={true}
                >
                  <span className="underline">W</span>indows Tour
                </button>
                <button
                  className="disabledBtn disabledText py-1 px-5"
                  disabled={true}
                >
                  What's <span className="underline">N</span>ew
                </button>
                <button
                  className="disabledBtn disabledText py-1 px-5"
                  disabled={true}
                >
                  <span className="underline">O</span>nline Registration
                </button>
                <button
                  className="disabledBtn disabledText py-1 px-5"
                  disabled={true}
                >
                  <span className="underline">P</span>roduct Catalog
                </button>
                <button
                  className="disabledBtn disabledText py-1 px-5"
                  disabled={true}
                >
                  Next <span className="underline">T</span>ip
                </button>
                <div className="bg-dividerHr h-[2px] mt-3" />
              </div>
            </div>
            <div className="font-W95FA flex flex-col lg:flex-row lg:justify-between mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="checkBoxShadow mr-1"
                  onChange={(e) => handleChange(e)}
                />
                <p>Do not show this Welcome Screen next time</p>
              </div>
              <button
                className="btnBoxShadow py-1 px-[61px] mt-2 lg:mt-0"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
