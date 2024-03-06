"use client";
import Navbar from "@/components/Navbar";
import TextInput from "@/components/TextInput";
import React, { useState } from "react";
import LinkedInProfile from "../linkedin-profile/page";
import ChatWindow from "@/components/ChatWindow";

const helper = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div>
      <Navbar />
      {buttonClicked ? (
        <div>
          <div className="p-4 absolute">
            <div className="">
              <div className="relative">
                <div className="grid grid-cols-6 md:grid-col-2 gap-1 align-middle justify-self-center">
                  <div className="flex align-middle col-span-2">
                    <TextInput />
                  </div>
                  <div className="w-[60vw] h-[60vh] col-span-4">
                    {/* <div className="grid grid-cols-3"> */}
                    <LinkedInProfile />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-start-9 ">
              <div className="col-start-9">
                <ChatWindow />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="p-4 absolute">
            <div className="">
              <div className="relative">
                <div className="grid grid-cols-6 md:grid-col-2 gap-1 align-middle justify-self-center">
                  <div className="flex align-middle col-span-2">
                    <TextInput />
                  </div>
                  <div className="w-[60vw] h-[60vh] col-span-4">
                    {/* <div className="grid grid-cols-3"> */}
                    <LinkedInProfile />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default helper;
