import React from "react";
import Draggable from "react-draggable";
import { BsExclamationLg, BsPaperclip } from "react-icons/bs";
import { GoMail } from "react-icons/go";

import CLOSE from "../assets/Close.svg";
import myMail from "../assets/win3.png";
import FOLDER from "../assets/Folder.ico";
import OPEN_OLDER from "../assets/Opened_Folder.ico";
// import MAILTOOLBAR from "../assets/inboxTool.png";

const Inbox = ({ visible, onClose }) => {
  const emailDiv = (
    <div className="flex">
      <div className="w-[11px] h-5" />
      <div className="w-[14px] h-5" />
      <div className="w-5 h-5 flex justify-center items-center">
        <GoMail />
      </div>
      <div className="w-[15px] h-5" />
      <div className="w-[163px] h-5">
        <p className="ml-2 font-bold">A++</p>
      </div>
      <div className="w-40 h-5">
        <p className="ml-2 font-bold">Welcome!</p>
      </div>
    </div>
  );

  return (
    <Draggable handle="#inbox">
      <div
        className={`${
          // visible ? "fixed inset-0 flex justify-center items-center" : "hidden"
          visible
            ? "absolute left-[10%] lg:left-[27%] top-[10%] lg:top-[21%] z-10"
            : "hidden"
        }`}
      >
        <div className="px-1 py-1 font-thin text-black h-fit dialogBoxShadow font-W95FA text-sm lg:text-base">
          <div className="flex items-center justify-between bg-primary">
            <div className="w-[92%] lg:w-[96%] bg-primary" id="inbox">
              <p className="text-white py-[1px] ml-1">Announcements</p>
            </div>
            <div className="w-[8%] lg:w-[4%]">
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
              <span className="underline">V</span>iew
            </p>
            <p>
              <span className="underline">T</span>ools
            </p>
            <p>
              Co
              <span className="underline">m</span>pose
            </p>
            <p>
              <span className="underline">H</span>elp
            </p>
          </div>
          {/* <div className="bg-dividerHr w-full h-[2px]" />
          <img
            src={MAILTOOLBAR}
            alt="MAILTOOLBAR"
            className="mt-[2px] -mb-[2px]"
          /> */}
          <div className="flex flex-col lg:flex-row h-full text-sm">
            <div className="w-[97%] h-40 lg:h-[260px] overflow-y-scroll lg:w-56 p-1 m-1 redeemInput">
              <div className="flex">
                <img src={myMail} alt="myMail" className="w-5 h-5 mb-1 mr-2" />
                <p>A++ Exchange</p>
              </div>
              <div className="flex">
                <img
                  src={FOLDER}
                  alt="FOLDER"
                  className="w-5 h-5 mb-1 mr-2 ml-7"
                />
                <p>Personal Folders</p>
              </div>
              <div className="flex">
                <img
                  src={FOLDER}
                  alt="FOLDER"
                  className="w-5 h-5 mb-1 mr-2 ml-14"
                />
                <p>Title 1</p>
              </div>
              <div className="flex">
                <img
                  src={OPEN_OLDER}
                  alt="OPEN_OLDER"
                  className="w-5 h-5 mb-1 mr-2 ml-14"
                />
                <p>Title 2</p>
              </div>
              <div className="flex">
                <img
                  src={FOLDER}
                  alt="FOLDER"
                  className="w-5 h-5 mb-1 mr-2 ml-14"
                />
                <p>Title 3</p>
              </div>
              <div className="flex">
                <img
                  src={FOLDER}
                  alt="FOLDER"
                  className="w-5 h-5 mb-1 mr-2 ml-14"
                />
                <p>Title 4</p>
              </div>
              <div className="flex">
                <img
                  src={FOLDER}
                  alt="FOLDER"
                  className="w-5 h-5 mb-1 mr-2 ml-14"
                />
                <p>Title 5</p>
              </div>
            </div>
            <div className="mt-1 mb-1 mr-1 ml-1 lg:ml-0 w-72 lg:w-96 bg-white mailBoxShadow">
              <div className="flex">
                <div className="w-3 h-5 headerBarBoxShadow" />
                <div className="w-3 h-5 headerBarBoxShadow flex justify-center items-center">
                  <BsExclamationLg />
                </div>
                <div className="w-5 h-5 headerBarBoxShadow flex justify-center items-center">
                  <GoMail />
                </div>
                <div className="w-4 h-5 headerBarBoxShadow flex justify-center items-center">
                  <BsPaperclip size={13} />
                </div>
                <div className="w-40 h-5 headerBarBoxShadow">
                  <p className="ml-2">From</p>
                </div>
                <div className="w-44 h-5 headerBarBoxShadow">
                  <p className="ml-2">Subject</p>
                </div>
              </div>
              <div className="h-60 bg-white overflow-y-scroll">
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
                {emailDiv}
              </div>
            </div>
          </div>
          <div className="px-1 mx-1 mailBoxShadow">
            <p className="text-sm">20 Items, 0 Unread</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Inbox;
