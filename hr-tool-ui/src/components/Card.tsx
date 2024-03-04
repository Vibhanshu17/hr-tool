"use client";
import React, { useEffect } from "react";

const Card = ({ profile }) => {
  return (
    <div className="text-sm col relative">
      <div className="card h-[100%] bg-base-100 shadow-xl">
        <figure>
          <img src={profile.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm ">{profile.name}</h2>
          <p className=" text-wrap text-xs">{profile.about}</p>
          <div className="grid grid-cols-2 card-actions justify-evenly">
            <button
              className="btn btn-primary w-[50%] h-[20%]"
              onClick={() => window.open(profile.url)}
            >
              Profile
            </button>
            <button
              className="btn btn-primary"
              onClick={() => console.log("Send Mail to " + profile.name)}
            >
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
