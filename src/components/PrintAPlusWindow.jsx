import React from "react";
import Draggable from "react-draggable";

import CLOSE from "../assets/Close.svg";
import NET_LOGO from "../assets/arblogo.png";

const PrintAPlusWIndow = ({ visible, onClose }) => {
  return (
    <div
      className={`${
        visible ? "fixed inset-0 flex justify-center items-center" : "hidden"
      }`}
    >
      <Draggable handle="#redeem">
        <div className="h-fit dialogBoxShadow w-80 px-1 py-1 text-black font-W95FA font-thin">
          <div
            className="bg-primary flex items-center justify-between"
            id="redeem"
          >
            <p className="text-white py-[1px] ml-1">Print A++</p>
            <div className="btnBoxShadow mr-1" onClick={onClose}>
              <img
                src={CLOSE}
                alt="CLOSE"
                className="w-[18px] h-[18px] pr-[2px]"
              />
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
            <form action="">
              <label htmlFor="pAmount">Print Amount:</label>
              <input
                type="text"
                name="pAmount"
                className="w-full redeemInput outline-none mt-1 mb-3"
              />
              <div className="flex justify-between items-center mb-6">
                <div className="flex">
                  <img
                    src={NET_LOGO}
                    alt="NET_LOGO"
                    className="h-[24px] w-[22px] mr-1"
                  />
                  <p>Network in use</p>
                </div>
                <input
                  type="submit"
                  value="Redeem A++"
                  className="btnInputBoxShadow py-[6px] px-[8.5px]"
                />
              </div>
            </form>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default PrintAPlusWIndow;
