"use client";
import React from "react";

function Review() {
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        {data.map((d) => (
          <div className="bg-white h-[450px] text-black rounded-xl">
            <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
              <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.review}</p>
              <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;

const data = [
  {
    name: `John Morgan`,
    img: `./images/John_Morgan.png`,
    review: `Lorem ipsum dolor sit amet, consectetur`,
  },
  {
    name: `Ellie Anderson`,
    img: `./images/Ellie_Anderson.png`,
    review: `Lorem ipsum dolor sit amet, consectetur`,
  },
  {
    name: `Nia Adebavo`,
    img: `./images/Nia_Adebavo.png`,
    review: `Lorem ipsum dolor sit amet, consectetur`,
  },
];
