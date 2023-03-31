import React from "react";
import Draggable from "react-draggable";
import CLOSE from "../assets/Close.svg";

const Notepad = ({ visible, onClose }) => {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore blanditiis voluptatum obcaecati incidunt similique nemo est, dolorem amet, exercitationem corporis quaerat deleniti at odit labore numquam sapiente harum placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore blanditiis voluptatum obcaecati incidunt similique nemo est, dolorem amet, exercitationem corporis quaerat deleniti at odit labore numquam sapiente harum placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore blanditiis voluptatum obcaecati incidunt similique nemo est, dolorem amet, exercitationem corporis quaerat deleniti at odit labore numquam sapiente harum placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore blanditiis voluptatum obcaecati incidunt similique nemo est, dolorem amet, exercitationem corporis quaerat deleniti at odit labore numquam sapiente harum placeat!";

  return (
    <Draggable handle="#note">
      <div
        className={`${
          // visible ? "fixed inset-0 flex justify-center items-center" : "hidden"
          visible
            ? "absolute left-[13%] lg:left-[36%] top-[5%] lg:top-[3%] z-10"
            : "hidden"
        }`}
      >
        <div className="w-72 lg:w-96 px-1 py-1 text-black dialogBoxShadow font-W95FA text-sm lg:text-base">
          <div className="flex items-center justify-between bg-primary">
            <div className="w-[92%] lg:w-[93.5%] bg-primary" id="note">
              <p className="text-white py-[1px] ml-1">Welcome</p>
            </div>
            <div className="w-[8%] lg:w-[6.5%]">
              <div className="mr-1 btnBoxShadow" onClick={onClose}>
                <img
                  src={CLOSE}
                  alt="CLOSE"
                  className="w-[18px] h-[18px] pr-[2px] mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-3 ml-2 text-sm disabledText">
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
          <div className="flex justify-center h-[90%]">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={lorem}
              className="w-[98%] h-[500px] redeemInput px-1 mb-1 outline-none"
            ></textarea>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Notepad;
