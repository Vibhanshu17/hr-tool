import React, { useEffect } from "react";
import Card from "../../components/Card";

interface Profile {
  url: string; // profile id
  name: string;
  img: string; // can scrap?
  about: string; // headline
  job_role: string; // industry?
  email: string; // not-required
}

const data: Profile[] = [
  {
    url: "www.linkedin.com/in/vibhanshu-gupta",
    email: "mail@gmail.com",
    img: "./images/John_Morgan.png",
    name: "John Morgan",
    job_role: "Software Engineer",
    about: "I'm a programmer, looking to work in a fast-paced team",
  },
  {
    url: "www.linkedin.com/in/vibhanshu-gupta",
    email: "mail@gmail.com",
    img: "./images/Ellie_Anderson.png",
    name: "Ellie Anderson",
    job_role: "Front-end Developer",
    about: "I'm a programmer, looking to work in a fast-paced team",
  },
  {
    url: "www.linkedin.com/in/vibhansh-gupta",
    email: "mail@gmail.com",
    img: "./images/Nia_Adebavo.png",
    name: "Nia Adebavo",
    job_role: "Full Stack Developer",
    about: "I'm a programmer, looking to work in a fast-paced team",
  },
  {
    url: "www.linkedin.com/in/vibhanshu-gupta",
    email: "mail@gmail.com",
    img: "./images/John_Morgan.png",
    name: "My Name",
    job_role: "Software Engineer",
    about:
      "I'm a programmer, looking to work in a fast-paced team akshgo pawehgso wajkshadg \
      owahse ldgowua ieksjbgdvowu asgdbjvqwn peg;ouvdbqw ne;sodg ub vqwnesdp goubv j i w q kenosdgui vhwbq k \
      egsdovuqwibhek gdsvoqvuwibheg skdv;owuqirhsbg ",
  },
  {
    url: "www.linkedin.com/in/vibhanshu-gupta",
    email: "mail@gmail.com",
    img: "./images/Ellie_Anderson.png",
    name: "My Name",
    job_role: "Front-end Developer",
    about: "I'm a programmer, looking to work in a fast-paced team",
  },
  {
    url: "www.linkedin.com/in/vibhansh-gupta",
    email: "mail@gmail.com",
    img: "./images/Nia_Adebavo.png",
    name: "My Name",
    job_role: "Full Stack Developer",
    about: "I'm a programmer, looking to work in a fast-paced team",
  },
  {
    url: "www.linkedin.com/in/vibhanshu-gupta",
    email: "mail@gmail.com",
    img: "./images/John_Morgan.png",
    name: "My Name",
    job_role: "Software Engineer",
    about:
      "I'm a programmer, looking to work in a fast-paced team akshgo pawehgso wajkshadg \
    owahse ldgowua ieksjbgdvowu asgdbjvqwn peg;ouvdbqw ne;sodg ub vqwnesdp goubv j i w q kenosdgui vhwbq k \
    egsdovuqwibhek gdsvoqvuwibheg skdv;owuqirhsbg ",
  },
  {
    url: "www.linkedin.com/in/vibhanshu-gupta",
    email: "mail@gmail.com",
    img: "./images/Ellie_Anderson.png",
    name: "My Name",
    job_role: "Front-end Developer",
    about: "I'm a programmer, looking to work in a fast-paced team",
  },
  {
    url: "www.linkedin.com/in/vibhansh-gupta",
    email: "mail@gmail.com",
    img: "./images/Nia_Adebavo.png",
    name: "My Name",
    job_role: "Full Stack Developer",
    about: "I'm a programmer, looking to work in a fast-paced team",
  },
];

export default function LinkedInProfile() {
  return (
    <>
      <div className="flex justify-center relative p-1">
        <div className="grid auto-cols-fr md:grid-col-3 auto-rows-fr grid-cols-3 gap-4">
          <Card profile={data[0]} />
          <Card profile={data[1]} />
          <Card profile={data[2]} />
          <Card profile={data[3]} />
          <Card profile={data[4]} />
          <Card profile={data[5]} />
          <Card profile={data[6]} />
          <Card profile={data[7]} />
          <Card profile={data[8]} />
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
    </>
  );
}
