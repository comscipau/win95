import React from "react";
import Draggable from "react-draggable";

import CLOSE from "../assets/Close.svg";
import NET_LOGO from "../assets/arblogo.png";

const PrintAPlusWIndow = ({ visible, onClose }) => {
  return (
    <Draggable handle="#print">
      <div
        className={`${
          // visible ? "fixed inset-0 flex justify-center items-center" : "hidden"
          visible
            ? "absolute left-[10%] lg:left-[38%] lg:right-[62%] top-[25%] z-10"
            : "hidden"
        }`}
      >
        <div className="px-1 py-1 font-thin text-black h-fit dialogBoxShadow w-72 lg:w-80 font-W95FA text-sm lg:text-base">
          <div className="flex items-center justify-between bg-primary">
            <div className="w-[92%] bg-primary" id="print">
              <p className="text-white py-[1px] ml-1">Print A++</p>
            </div>
            <div className="w-[8%]">
              <div className="mr-1 btnBoxShadow" onClick={onClose}>
                <img
                  src={CLOSE}
                  alt="CLOSE"
                  className="w-[18px] h-[18px] pr-[2px] mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="pt-[52px] px-[28px] pb-[27px] relative">
            <div className="flex justify-between mb-4">
              <p>USDT Balance:</p>
              <p>$45.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>A++ Printer:</p>
              <p>0xca.....1234</p>
            </div>
            <div className="bg-divider w-[2px] h-[65px] absolute left-1/2 top-[52px]" />
          </div>
          <div className="px-[28px]">
            <label htmlFor="pAmount">Print Amount:</label>
            <input
              type="text"
              name="pAmount"
              className="w-full mt-1 mb-3 outline-none redeemInput"
            />
            <div className="flex items-center justify-between mb-6">
              <div className="flex">
                <img
                  src={NET_LOGO}
                  alt="NET_LOGO"
                  className="h-[24px] w-[22px] mr-1"
                />
                <p>Network in use</p>
              </div>
              <botton className="btnInputBoxShadow py-[6px] px-[8.5px]">
                Redeem A++
              </botton>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default PrintAPlusWIndow;
