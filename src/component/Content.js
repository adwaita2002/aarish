import {
    faAngleRight,
    faBan,
    faCommentSlash,
    faEye,
    faLocationDot,
    faLock,
    faToggleOff,
    faToggleOn,
    faUsers,
    faXmark,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { useState } from "react";
  
  export default function Content() {
  
    const [tougle, setTougle] = useState({
      password: true,
      ban: false,
      location: true,
      profile: false
    });
  
    return (
      <div className="mt-4">
        <div className="text-[40px] font-bold">Settings</div>
        <div>
          <div className="flex gap-10 text-[19px] font-semibold mt-5">
            <h1>Basic</h1>
            <h1 className="text-blue-600">Security</h1>
            <h1>Notification</h1>
            <h1>Privacy</h1>
          </div>
        </div>
        <div className="flex mt-7 gap-10 w-full">
          <div className="w-1/2">
            <div className="flex justify-between items-start mt-4">
              <div className="flex gap-7 item-start">
                <FontAwesomeIcon icon={faLock} className="mt-1.5" />
                <div className="text-[17px] flex flex-col items-start font-semibold">
                  <h1>Require to change password</h1>
                  <h1 className="my-4 text-slate-500">
                    Require a password change for new accounts
                  </h1>
                </div>
              </div>
              <div>
                {" "}
                <FontAwesomeIcon
                  icon={(tougle.password) ? faToggleOn: faToggleOff}
                  className= {`text-[35px] ${(tougle.password) ? "text-green-600" : "text-gray-500"} duration-300`}
                  onClick={() => setTougle({...tougle, password: !tougle.password})}
                ></FontAwesomeIcon>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-start mt-4">
              <div className="flex gap-7 item-start">
                <FontAwesomeIcon icon={faBan} className="mt-1.5" />
                <div className="text-[17px] flex flex-col items-start font-semibold">
                  <h1>Re-passwords ban</h1>
                  <h1 className="my-4 text-slate-500">
                    Ban on the use of re-passwords
                  </h1>
                </div>
              </div>
              <div>
                {" "}
                <FontAwesomeIcon
                  icon={(tougle.ban) ? faToggleOn: faToggleOff}
                  className= {`text-[35px] ${(tougle.ban) ? "text-green-600" : "text-gray-500"} duration-300`}
                  onClick={() => setTougle({...tougle, ban: !tougle.ban})}
                ></FontAwesomeIcon>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-start mt-4">
              <div className="flex gap-7 item-start">
                <FontAwesomeIcon icon={faLocationDot} className="mt-1.5" />
                <div className="text-[17px] flex flex-col items-start font-semibold">
                  <h1>Allow use location</h1>
                  <h1 className="my-4 text-slate-500">
                    Allow application to use your location
                  </h1>
                </div>
              </div>
              <div>
                {" "}
                <FontAwesomeIcon
                  icon={(tougle.location) ? faToggleOn: faToggleOff}
                  className= {`text-[35px] ${(tougle.location) ? "text-green-600" : "text-gray-500"} duration-300`}
                  onClick={() => setTougle({...tougle, location: !tougle.location})}
                ></FontAwesomeIcon>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-start mt-4">
              <div className="flex gap-7 item-start">
                <FontAwesomeIcon icon={faUsers} className="mt-1.5" />
                <div className="text-[17px] flex flex-col items-start font-semibold">
                  <h1>Allow public Profile</h1>
                  <h1 className="my-4 text-slate-500">
                    Allow everyone to see your Profile
                  </h1>
                </div>
              </div>
              <div>
                {" "}
                <FontAwesomeIcon
                  icon={(tougle.profile) ? faToggleOn: faToggleOff}
                  className= {`text-[35px] ${(tougle.profile) ? "text-green-600" : "text-gray-500"} duration-300`}
                  onClick={() => setTougle({...tougle, profile: !tougle.profile})}
                ></FontAwesomeIcon>
              </div>
            </div>
            <hr />
          </div>
          <div className="w-1/2">
            <div className="flex justify-between items-start mt-4">
              <div className="flex gap-7 item-start ">
                <FontAwesomeIcon
                  icon={faLock}
                  className="mt-1.5 p-[2px] border-dashed border-2 border-black "
                />
                <div className="text-[17px] flex flex-col items-start font-semibold">
                  <h1>Password length</h1>
                  <h1 className="my-4 text-slate-500">
                    Password length not less than...
                  </h1>
                </div>
              </div>
              <div className="px-[15px] border-solid border-2 border-black rounded-md mt-1 ">
                {" "}
                8{" "}
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-start mt-4">
              <div className="flex gap-7 item-start ">
                <FontAwesomeIcon
                  icon={faCommentSlash}
                  className="mt-1.5 p-[2px] "
                />
                <div className="text-[17px] flex flex-col items-start font-semibold">
                  <h1>Private messages</h1>
                  <h1 className="mt-4 text-slate-500">
                    Who can send you private messages
                  </h1>
                  <div className="flex gap-4 mb-5 mt-1.5">
                    <div className="px-[15px] border-solid border-2 border-black rounded-full  text-white bg-black text-[15px]">
                      {" "}
                      Team{" "}
                    </div>
                    <div className="px-[15px] border-solid border-2 border-black rounded-full  text-black text-[15px]">
                      {" "}
                      Nobody{" "}
                    </div>
                    <div className="px-[15px] border-solid border-2 border-black rounded-full  text-black text-[15px]">
                      {" "}
                      Choose{" "}
                      <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-start mt-4">
              <div className="flex gap-7 item-start ">
                <FontAwesomeIcon icon={faEye} className="mt-1.5 p-[2px] " />
                <div className="text-[17px] flex flex-col items-start font-semibold">
                  <h1>Visibility</h1>
                  <h1 className="mt-4 text-slate-500">
                    See all profile, except...
                  </h1>
                  <div className="flex gap-4  mt-2">
                    <div className="px-[15px]  rounded-full bg-white text-[15px] flex gap-3 items-center shadow-lg">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/AngryBirdsReloaded-AppIcon.webp/316px-AngryBirdsReloaded-AppIcon.webp.png"
                        alt="birds"
                        className="w-[2rem] h-[2rem] rounded-full"
                      />
                      Emma Bron
                      <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className="px-[15px]  rounded-full bg-white text-[15px] flex gap-3 items-center shadow-lg">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKIH2b8gIphED8k8AHlF-XdYAOOdqrrzlJfolb27D0ug4zF4xx-nIqk4cKw0rMIWHt0w&usqp=CAU"
                        alt="birds"
                        className="w-[2rem] h-[2rem] rounded-full"
                      />
                      David Johnson
                      <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className="mt-2">
                      <h1 className="text-blue-600 text-[13px]">
                        {" "}
                        and 54 users...
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }