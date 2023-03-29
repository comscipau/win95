import React from "react";
import Draggable from "react-draggable";
import CLOSE from "../assets/Close.svg";
import myMail from "../assets/win3.png";
import FOLDER from "../assets/Folder.ico";
import OPEN_OLDER from "../assets/Opened_Folder.ico";

const Inbox = ({ visible, onClose }) => {
  return (
    <div
      className={`${
        // visible ? "fixed inset-0 flex justify-center items-center" : "hidden"
        visible ? "absolute left-[27%] top-[31%]" : "hidden"
      }`}
    >
      <Draggable handle="#inbox">
        <div className="px-1 py-1 font-thin text-black h-fit dialogBoxShadow font-W95FA">
          <div
            className="flex items-center justify-between bg-primary"
            id="inbox"
          >
            <p className="text-white py-[1px] ml-1">Inbox</p>
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
          <div className="flex h-full text-sm">
            <div className="w-56 p-1 m-1 redeemInput">
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
                <p>Deleted Items</p>
              </div>
              <div className="flex">
                <img
                  src={OPEN_OLDER}
                  alt="OPEN_OLDER"
                  className="w-5 h-5 mb-1 mr-2 ml-14"
                />
                <p className="font-bold">Inbox</p>
              </div>
              <div className="flex">
                <img
                  src={FOLDER}
                  alt="FOLDER"
                  className="w-5 h-5 mb-1 mr-2 ml-14"
                />
                <p>Outbox</p>
              </div>
              <div className="flex">
                <img
                  src={FOLDER}
                  alt="FOLDER"
                  className="w-5 h-5 mb-1 mr-2 ml-14"
                />
                <p>Sent Items</p>
              </div>
            </div>
            <div className="mt-1 mb-1 mr-1 bg-white mailBoxShadow">
              <div className="flex">
                <div className="w-3 h-5 headerBarBoxShadow" />
                <div className="w-3 h-5 headerBarBoxShadow" />
                <div className="w-5 h-5 headerBarBoxShadow" />
                <div className="w-4 h-5 headerBarBoxShadow" />
                <div className="w-40 h-5 headerBarBoxShadow" />
                <div className="w-40 h-5 headerBarBoxShadow" />
              </div>
            </div>
          </div>
          <div className="px-1 mx-1 mailBoxShadow">
            <p className="text-sm">0 Item, 0 Unread</p>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Inbox;
