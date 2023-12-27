import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCommentDots,
  faCalendar,
  faCopy,
  faGears,
  faCircleDot,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Sidebar() {
  return (
    <div className="bg-orange-50 w-1/6  h-screen">
      <div>
        <div className="flex gap-2 font-semibold text-[30px] items-center justify-center pt-12 pb-14">
          <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
          <h1>TechHazel</h1>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKAc6hhGA4NM3-lAbVhEQqPrvpQ51wv2RJPc916A1RQ&s"
              alt="no pic"
              className="rounded-full w-[5rem] h-[5rem] border-solid border-4 border-sky-500"
            />
          </div>
          <div className="font-bold mt-3">
            <h1>Catherine Reed</h1>
          </div>

          <div className="flex gap-1 text-[13px] font-bold bg-white px-2 py-0.5 rounded-full shadow-md mt-2 items-center">
            <h1>⭐ Admin</h1>
          </div>
        </div>

        <div className="flex w-full flex-col mt-14 text-start">
          <div className="flex  font-bold text-[13px]  gap-8 ml-10 items-center">
            <div>
              <FontAwesomeIcon icon={faUser} className="text-[17px]" />
            </div>
            <div>Profile</div>
          </div>
          <div className="flex  font-bold text-[13px]  gap-8 ml-10 mt-4 items-center">
            <FontAwesomeIcon icon={faCommentDots} className="text-[17px]" />
            <h1 className="text-start">Chat</h1>
          </div>
          <div className="flex  font-bold text-[13px]  gap-8 ml-10 mt-4 items-center">
            <FontAwesomeIcon icon={faCalendar} className="text-[17px]" />
            <h1>Calender</h1>
            <h1>
              {" "}
              <FontAwesomeIcon
                icon={faCircleDot}
                className="text-green-500 text-[10px] items-center"
              />
            </h1>
          </div>
          <div className="flex  font-bold text-[13px]  gap-8 ml-10 mt-4">
            <FontAwesomeIcon icon={faCopy} className="text-[17px]" />
            <h1>Offers</h1>
            <h1>
              {" "}
              <FontAwesomeIcon
                icon={faCircleDot}
                className="text-green-500 text-[10px] ml-4 items-center"
              />
            </h1>
          </div>
          <div className="flex  font-bold text-[13px]  gap-8 ml-10 mt-4  items-center">
            <FontAwesomeIcon
              icon={faGears}
              className="text-[17px] text-blue-400"
            />
            <h1 className="text-blue-400">Settings</h1>
          </div>
        </div>

        <div className="flex  mt-10 justify-center">
          <img
            src="https://t3.ftcdn.net/jpg/05/94/85/80/360_F_594858012_74BuEogW9k3Gn96aAal6Hk26Eh1fn9CB.jpg"
            alt="birds"
            className="w-[2rem] h-[2rem] rounded-full mr-[-0.5rem]"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1ARbt0-njFD0KSL4Ns_n47ChOXvoUC8g70YmMe4RVw&s"
            alt="birds"
            className="w-[2rem] h-[2rem]  rounded-full mr-[-0.5rem]"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKIH2b8gIphED8k8AHlF-XdYAOOdqrrzlJfolb27D0ug4zF4xx-nIqk4cKw0rMIWHt0w&usqp=CAU"
            alt="birds"
            className="w-[2rem] h-[2rem]  rounded-full mr-[-0.5rem]"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/AngryBirdsReloaded-AppIcon.webp/316px-AngryBirdsReloaded-AppIcon.webp.png"
            alt="birds"
            className="w-[2rem] h-[2rem]  rounded-full  mr-[-0.5rem]"
          />
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="w-[2rem] h-[2rem] rounded-full"
          />
        </div>
      </div>
      <div>
        {" "}
        <div className="flex justify-center text-center mt-3 font-serif font-bold text-[15px]">
          Find new member in our community
        </div>{" "}
      </div>
    </div>
  );
}