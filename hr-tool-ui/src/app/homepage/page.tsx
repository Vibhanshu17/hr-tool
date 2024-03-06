"use client";
import TextInput from "@/components/TextInput";
import React, { useState } from "react";
import LinkedInProfile from "../linkedin-profile/page";
import Navbar from "@/components/Navbar";
import ChatWindow from "@/components/ChatWindow";
import Dashboard from "@/app/Dashboard/page";

const page = () => {
  const data = "Apple;Tiger;Zambia";
  const onClickHandler = async () => {
    const url = "/api/suggestions?keywords=" + data;

    const res = await fetch(url).then((res) => res.json);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="p-4 absolute bg-gray-50">
          <div className="bg-slate-100-50">
            <div className="relative">
              <div className="grid grid-cols-12 md:grid-col-2 gap-1 align-middle justify-self-center">
                <div className=" align-middle col-start-1 col-span-9 justify-center h-[70vh] grid grid-row-12">
                  <div className="row-start-4 row-span-8">
                    <Dashboard />
                  </div>
                </div>
                <div className="w-[80vw] h-[40vh] relative">
                  <div>
                    <ChatWindow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
