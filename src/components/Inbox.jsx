import React, { useState } from "react";
import Draggable from "react-draggable";
import { BsExclamationLg, BsPaperclip } from "react-icons/bs";
import { GoMail } from "react-icons/go";

import CLOSE from "../assets/Close.svg";
import myMail from "../assets/win3.png";
import FOLDER from "../assets/Folder.ico";
import OPEN_FOLDER from "../assets/Opened_Folder.ico";
// import MAILTOOLBAR from "../assets/inboxTool.png";

const Inbox = ({ visible, onClose }) => {
  const EmailDiv = ({ isActive, onClick, from, subject }) => {
    return (
      <div
        className={
          isActive
            ? "flex bg-primary text-white hover:cursor-pointer"
            : "flex hover:cursor-pointer"
        }
        onClick={onClick}
      >
        <div className="w-[11px] h-5" />
        <div className="w-[14px] h-5" />
        <div className="w-5 h-5 flex justify-center items-center">
          <GoMail />
        </div>
        <div className="w-[15px] h-5" />
        <div className="w-[148px] lg:w-[163px] h-5">
          <p className="ml-2 font-bold">{from}</p>
        </div>
        <div className="w-40 h-5">
          <p className="ml-2 font-bold">{subject}</p>
        </div>
      </div>
    );
  };

  const SubFolder = ({ isActive, onClick, title }) => {
    return (
      <div className={isActive ? "flex bg-primary text-white" : "flex"}>
        <div
          className="hover:cursor-pointer flex items-center w-fit ml-14"
          onClick={onClick}
        >
          <img
            src={FOLDER}
            alt="FOLDER"
            className={isActive ? "hidden" : "flex w-5 h-5 my-[2px] mr-2"}
          />
          <img
            src={OPEN_FOLDER}
            alt="OPEN_FOLDER"
            className={isActive ? "flex w-5 h-5 my-[2px] mr-2" : "hidden"}
          />
          <p>{title}</p>
        </div>
      </div>
    );
  };

  const [showFolder_group1, setShowFolder_group1] = useState(true);

  const [activeElement, setActiveElement] = useState(-1);
  const updateActiveElement = (id) => {
    setActiveElement(activeElement !== id ? id : -1);
  };

  const [activeEmail, setActiveEmail] = useState(-1);
  const updateActiveEmail = (id) => {
    setActiveEmail(activeEmail !== id ? id : -1);
  };

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
              <div id="folder_group1">
                <div className="flex items-center">
                  <div
                    className="hover:cursor-pointer flex items-center w-fit ml-7"
                    onClick={() => setShowFolder_group1(!showFolder_group1)}
                  >
                    <img
                      src={FOLDER}
                      alt="FOLDER"
                      className="w-5 h-5 my-[2px] mr-2"
                    />
                    <p>Personal Folders</p>
                  </div>
                </div>
                <div
                  id="subfolder_group1"
                  className={showFolder_group1 ? "block" : "hidden"}
                >
                  <SubFolder
                    isActive={1 === activeElement}
                    onClick={() => updateActiveElement(1)}
                    title={"Title 1"}
                  />
                  <SubFolder
                    isActive={2 === activeElement}
                    onClick={() => updateActiveElement(2)}
                    title={"Title 2"}
                  />
                  <SubFolder
                    isActive={3 === activeElement}
                    onClick={() => updateActiveElement(3)}
                    title={"Title 3"}
                  />
                  <SubFolder
                    isActive={4 === activeElement}
                    onClick={() => updateActiveElement(4)}
                    title={"Title 4"}
                  />
                  <SubFolder
                    isActive={5 === activeElement}
                    onClick={() => updateActiveElement(5)}
                    title={"Title 5"}
                  />
                </div>
              </div>
            </div>
            <div className="mt-1 mb-1 mr-[5px] lg:mr-1 ml-1 lg:ml-0 w-72 lg:w-96 bg-white mailBoxShadow">
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
                <EmailDiv
                  from={"A++"}
                  subject={"Welcome!"}
                  isActive={1 === activeEmail}
                  onClick={() => updateActiveEmail(1)}
                />
                <EmailDiv
                  from={"A++"}
                  subject={"Welcome!"}
                  isActive={2 === activeEmail}
                  onClick={() => updateActiveEmail(2)}
                />
                <EmailDiv
                  from={"A++"}
                  subject={"Welcome!"}
                  isActive={3 === activeEmail}
                  onClick={() => updateActiveEmail(3)}
                />
                <EmailDiv
                  from={"A++"}
                  subject={"Welcome!"}
                  isActive={4 === activeEmail}
                  onClick={() => updateActiveEmail(4)}
                />
                <EmailDiv
                  from={"A++"}
                  subject={"Welcome!"}
                  isActive={5 === activeEmail}
                  onClick={() => updateActiveEmail(5)}
                />
              </div>
            </div>
          </div>
          <div className="px-1 mx-1 mailBoxShadow">
            <p className="text-sm">5 Items, 0 Unread</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Inbox;
