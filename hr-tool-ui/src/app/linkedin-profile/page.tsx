"use client";
// import { ParsedUrlQuery } from "querystring";
// import { ParsedUrlQuery } from "node:querystring";
import React, { useEffect } from "react";

import Card from "../../components/Card";
import Navbar from "@/components/Navbar";
// import { useLocation } from "react-router-dom";
// import { useRouter } from "next/router";
import { useRouter, useSearchParams } from "next/navigation";

export default function LinkedInProfile() {
  // const { state } = useLocation();
  // const router = useRouter();
  const searchParams = useSearchParams();
  const in_data = JSON.parse(searchParams.get("search"));
  // console.log("in_data[0]: " + in_data[0]);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-8 relative">
        <div className="flex justify-center align-middle relative p-1 col-start-2 col-span-6">
          <div className="grid auto-cols-fr md:grid-col-3 auto-rows-fr grid-cols-3 gap-0">
            <Card profile={in_data[0]} />
            <Card profile={in_data[1]} />
            <Card profile={in_data[2]} />
            <Card profile={in_data[3]} />
            <Card profile={in_data[4]} />
            <Card profile={in_data[5]} />
            <Card profile={in_data[6]} />
            <Card profile={in_data[7]} />
            <Card profile={in_data[8]} />
            {/* <Card
              profile={in_data && in_data.length > 0 ? in_data[0] : data[0]}
            />
            <Card
              profile={in_data && in_data.length > 1 ? in_data[1] : data[1]}
            />
            <Card
              profile={in_data && in_data.length > 2 ? in_data[1] : data[2]}
            />
            <Card
              profile={in_data && in_data.length > 3 ? in_data[1] : data[3]}
            />
            <Card
              profile={in_data && in_data.length > 4 ? in_data[1] : data[4]}
            />
            <Card
              profile={in_data && in_data.length > 5 ? in_data[1] : data[5]}
            />
            <Card
              profile={in_data && in_data.length > 6 ? in_data[1] : data[6]}
            />
            <Card
              profile={in_data && in_data.length > 7 ? in_data[1] : data[7]}
            />
            <Card
              profile={in_data && in_data.length > 8 ? in_data[1] : data[8]}
            /> */}

            {/* <Card profile={data[2]} />
          <Card profile={data[3]} />
          <Card profile={data[4]} />
          <Card profile={data[5]} />
          <Card profile={data[6]} />
          <Card profile={data[7]} />
          <Card profile={data[8]} /> */}
            {/* <div className="rounded bg-slate-100 p-3">This has some content.</div>
          <div className="rounded bg-slate-100 p-3">
            This has more content so that its significantly larger than the
            other items. Yet all items, even the one in the new line will grow
            to the size of the highest container.
          </div>
          <div className="rounded bg-slate-100 p-3">More content.</div>
          <div className="rounded bg-slate-100 p-3">
            First item in new line.
          </div> */}
            {/* {data.map((d) => (
            <Card profile={d} />
          ))} */}
          </div>
        </div>
      </div>
    </>
  );
}
