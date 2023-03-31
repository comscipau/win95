import React from "react";
import Draggable from "react-draggable";

import CLOSE from "../assets/Close.svg";
import NET_LOGO from "../assets/arblogo.png";

const MyAPlusWindow = ({ visible, onClose }) => {
  return (
    <Draggable handle="#myAplus">
      <div
        className={`${
          // visible.show
          //   ? "fixed inset-0 flex justify-center items-center"
          //   : "hidden"
          visible.show
            ? "absolute left-[6.5%] lg:left-[37%] lg:right-[63%] top-[22.5%] lg:top-[21%] z-10"
            : "hidden"
        }`}
      >
        <div className="h-fit dialogBoxShadow w-[320px] lg:w-[355px] px-1 py-1 text-black font-W95FA font-thin text-sm lg:text-base">
          <div className="flex items-center justify-between bg-primary">
            <div className="w-[93%] bg-primary" id="myAplus">
              <p className="text-white py-[1px] ml-1">My A++</p>
            </div>
            <div className="w-[7%]">
              <div className="mr-1 btnBoxShadow" onClick={onClose}>
                <img
                  src={CLOSE}
                  alt="CLOSE"
                  className="w-[18px] h-[18px] pr-[2px] mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[19px] px-3 lg:px-[21px] pb-[60px] relative">
            <div className="flex items-center justify-end">
              <p>Network in use</p>
              <img
                src={NET_LOGO}
                alt="NET_LOGO"
                className="h-[24px] w-[22px] ml-1"
              />
            </div>
            <div className="pt-6">
              <div className="flex justify-between mb-4">
                <p>A++ Price:</p>
                <p>$45.00</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Total Supply:</p>
                <p>10,000,000</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>USDT Backing Amount:</p>
                <p>$15,000,000.00</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Mint Fee:</p>
                <p>$0.15</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Redeem Fee:</p>
                <p>$0.005</p>
              </div>
            </div>
            <div className="bg-divider w-[2px] h-[182px] absolute left-1/2 top-[68px]" />
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MyAPlusWindow;
