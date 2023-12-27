import {
    faBell,
    faMagnifyingGlass,
    faRightFromBracket,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  
  export default function Navbar() {
    return (
      <>
        <div className="bg-white pt-12">
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-10 items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[25px]" />
              <h1 className="text-slate-400 text-[20px]">
                Search Something...
              </h1>
            </div>
            <div className="flex gap-10 text-[25px] items-center">
              <div>
                <FontAwesomeIcon icon={faBell} />
                <h1 className="text-[70px] absolute top-[-19px] right-[103px] text-green-400">
                  .
                </h1>
              </div>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </div>
          </div>
        </div>
      </>
    );
  }