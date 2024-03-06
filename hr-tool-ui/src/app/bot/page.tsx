"use client";
import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "@/app/chat/config";
import MessageParser from "@/app/chat/MessageParser";
import ActionProvider from "@/app/chat/ActionProvider";
import styles from "@/app/chat/chat.module.css";

const bot = () => {
  return (
    // <div className="text-center bg-[#282c34] min-h-[100vh] relative">
    // <div className="w-[40vw] h-[75vh] bg-center bg-slate-300">
    <div className="flex justify-center">
      <div
        style={{ maxWidth: "300px", justifyContent: "center" }}
        className={styles.window}
      >
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
};

export default bot;
