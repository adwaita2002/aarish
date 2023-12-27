import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Content from "../component/Content";

export default function Home() {
  return (
    <div className="flex w-screen">
      <Sidebar className="w-1/6"></Sidebar>
      <div className="w-5/6  px-10">
        <Navbar></Navbar>
        <Content></Content>
      </div>
    </div>
  );
}