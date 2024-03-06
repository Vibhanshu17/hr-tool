"use client";
import React, { useEffect } from "react";

const Card = ({ profile }) => {
  return (
    <div className="text-sm col relative size-10/12 relative">
      <div className="card h-[100%] bg-base-100 shadow-xl relative">
        <figure>
          <img className="h-[70%]" src={"/images/image.png"} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm ">{profile.name}</h2>
          <p className=" text-wrap text-xs">{profile.headline}</p>
          <p className="text-wrap">
            <b>Experience: </b>
            {profile.experience_months} months
          </p>
          {/* <div className="grid grid-cols-2 card-actions justify-evenly"> */}
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary btn-sm"
              onClick={() =>
                window.open(`//www.linkedin.com/in/${profile.profile_id}`)
              }
            >
              Profile
            </button>
            {/* <button
              className="btn btn-primary btn-sm"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Experience
            </button> */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Candiates Experiences</h3>
                {/* <p className="py-4">{profile["companies"]}</p> */}
                {profile["companies"].map(function (e: string, i: number) {
                  return (
                    <p className="py-4" key={i}>
                      {/* {e} */}
                      {profile["companies"][i]}
                    </p>
                  );
                })}
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
