"use client";
import "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import styles from "./dashboard.module.css";
import { useNavigate } from "react-router-dom";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";

// var data = [
//   {
//     url: "//www.linkedin.com/in/vibhanshu-gupta",
//     email: "mail@gmail.com",
//     img: "./images/John_Morgan.png",
//     name: "John Morgan",
//     job_role: "Software Engineer",
//     about: "I'm a programmer, looking to work in a fast-paced team",
//   },
//   {
//     url: "//www.linkedin.com/in/vibhanshu-gupta",
//     email: "mail@gmail.com",
//     img: "./images/Ellie_Anderson.png",
//     name: "Ellie Anderson",
//     job_role: "Front-end Developer",
//     about: "I'm a programmer, looking to work in a fast-paced team",
//   },
//   {
//     url: "//www.linkedin.com/in/vibhansh-gupta",
//     email: "mail@gmail.com",
//     img: "./images/Nia_Adebavo.png",
//     name: "Nia Adebavo",
//     job_role: "Full Stack Developer",
//     about: "I'm a programmer, looking to work in a fast-paced team",
//   },
//   {
//     url: "//www.linkedin.com/in/vibhanshu-gupta",
//     email: "mail@gmail.com",
//     img: "./images/John_Morgan.png",
//     name: "My Name",
//     job_role: "Software Engineer",
//     about:
//       "I'm a programmer, looking to work in a fast-paced team akshgo pawehgso wajkshadg \
//     owahse ldgowua ieksjbgdvowu asgdbjvqwn peg;ouvdbqw ne;sodg ub vqwnesdp goubv j i w q kenosdgui vhwbq k \
//     egsdovuqwibhek gdsvoqvuwibheg skdv;owuqirhsbg ",
//   },
//   {
//     url: "//www.linkedin.com/in/vibhanshu-gupta",
//     email: "mail@gmail.com",
//     img: "./images/Ellie_Anderson.png",
//     name: "My Name",
//     job_role: "Front-end Developer",
//     about: "I'm a programmer, looking to work in a fast-paced team",
//   },
//   {
//     url: "//www.linkedin.com/in/vibhansh-gupta",
//     email: "mail@gmail.com",
//     img: "./images/Nia_Adebavo.png",
//     name: "My Name",
//     job_role: "Full Stack Developer",
//     about: "I'm a programmer, looking to work in a fast-paced team",
//   },
//   {
//     url: "//www.linkedin.com/in/vibhanshu-gupta",
//     email: "mail@gmail.com",
//     img: "./images/John_Morgan.png",
//     name: "My Name",
//     job_role: "Software Engineer",
//     about:
//       "I'm a programmer, looking to work in a fast-paced team akshgo pawehgso wajkshadg \
//   owahse ldgowua ieksjbgdvowu asgdbjvqwn peg;ouvdbqw ne;sodg ub vqwnesdp goubv j i w q kenosdgui vhwbq k \
//   egsdovuqwibhek gdsvoqvuwibheg skdv;owuqirhsbg ",
//   },
//   {
//     url: "//www.linkedin.com/in/vibhanshu-gupta",
//     email: "mail@gmail.com",
//     img: "./images/Ellie_Anderson.png",
//     name: "My Name",
//     job_role: "Front-end Developer",
//     about: "I'm a programmer, looking to work in a fast-paced team",
//   },
//   {
//     url: "//www.linkedin.com/in/vibhansh-gupta",
//     email: "mail@gmail.com",
//     img: "./images/Nia_Adebavo.png",
//     name: "My Name",
//     job_role: "Full Stack Developer",
//     about: "I'm a programmer, looking to work in a fast-paced team",
//   },
// ];
const Dashboard = () => {
  const tags = [
    [
      "Software Engineer;Google;India",
      "2 years of experience in a skilled coder",
    ],
    [
      "Data Engineer;10 years Experience;Machine Learning",
      "Senior Data Engineer required for a high paced job role",
    ],
    [
      "Consulting Analyst;Finance;MBA",
      "Female Candidate required for consulting role in Big 4 with experience in Finance",
    ],
  ];
  const [profiles, setProfiles] = useState([]);
  async function onClickHandler(index: number) {
    console.log("index of job post: " + index);
    setProfiles(
      await fetch(
        `/api/suggestions?keywords=${tags[index][0]};;${tags[index][1]}`
      ).then((res) => res.json())
    );
    // console.log(profiles);
    console.log("Data Received");
  }

  return (
    <div className="h-[70%]">
      <Accordion className="bg-slate-100 w-[125%]" defaultExpanded>
        <AccordionSummary
          sx={{ color: "#0756AF" }}
          className="summary"
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Software Engineer, Bangalore
        </AccordionSummary>

        <AccordionDetails className="details">
          <div className="flexbox text-sm">
            <p>
              <b>Requisition ID:</b>
              {` 2400002531`}
            </p>
            <p>
              <b>Job:</b>
              {` IT Services`}{" "}
            </p>
            <p>
              <b>Work Locations:</b>
              {` India`}
            </p>
            <p>
              <b>Schedule:</b>
              {` Full-time`}
            </p>
            <p>
              <b>Employee Status:</b>
              {` Permanent`}
            </p>
          </div>
        </AccordionDetails>

        <div className="grid grid-col-12  pb-4  ">
          <div className="tags col-start-2 col-span-1 relative">
            <Chip label="IT Services" variant="filled" color="primary" />
            <Chip
              label="Fresher"
              variant="filled"
              color="success"
              sx={{ marginLeft: 1 }}
            />
          </div>
          <div className="action-buttons col-start-5 relative">
            {profiles.length == 0 ? (
              <Button
                variant="contained"
                className="bg-[#1976d2] btn-sm"
                onClick={() => onClickHandler(0)}
              >
                Get Recommendations
              </Button>
            ) : (
              <Link
                href={{
                  pathname: "/linkedin-profile",
                  query: { search: JSON.stringify(profiles) },
                }}
              >
                <Button
                  variant="contained"
                  className="bg-[#1976d2] btn-sm"
                  // onClick={() => onClickHandler(0)}
                >
                  View Profiles
                </Button>
                {/* <a onClick={handleClick}>About</a> */}
              </Link>
            )}
            <Button
              variant="outlined"
              className="btn-sm"
              onClick={() => {
                window.open(
                  `https://www.sc.com/en/global-careers/early-careers/our-programmes/graduates/`,
                  "_blank"
                );
              }}
              sx={{ marginLeft: 1, marginRight: 2 }}
            >
              SEE JOB
            </Button>
          </div>
        </div>
      </Accordion>

      <Accordion className="bg-slate-100 w-[125%]" defaultExpanded>
        <AccordionSummary
          sx={{ color: "#0756AF" }}
          className="summary"
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Data Engineer, Chennai
        </AccordionSummary>

        <AccordionDetails className="details">
          <div className="flexbox text-sm">
            <p>
              <b>Requisition ID:</b>
              {` 2400002532`}
            </p>
            <p>
              <b>Job:</b>
              {` Data & Operations`}{" "}
            </p>
            <p>
              <b>Work Locations:</b>
              {` India`}
            </p>
            <p>
              <b>Schedule:</b>
              {` Full-time`}
            </p>
            <p>
              <b>Employee Status:</b>
              {` Permanent`}
            </p>
          </div>
        </AccordionDetails>

        <div className="grid grid-col-12  pb-4  ">
          <div className="tags col-start-2 col-span-1 relative">
            <Chip label="High Paced" variant="filled" color="primary" />
            <Chip
              label="Experienced"
              variant="filled"
              color="success"
              sx={{ marginLeft: 1 }}
            />
          </div>
          <div className="action-buttons col-start-5 relative">
            <Button
              variant="contained"
              className="bg-[#1976d2] btn-sm"
              onClick={() => onClickHandler(1)}
            >
              Get Recommendations
            </Button>
            <Button
              variant="outlined"
              className="btn-sm"
              onClick={() => {
                window.open(
                  `https://www.sc.com/en/global-careers/experienced-hire/`,
                  "_blank"
                );
              }}
              sx={{ marginLeft: 1, marginRight: 2 }}
            >
              SEE JOB
            </Button>
          </div>
        </div>
      </Accordion>

      <Accordion className="bg-slate-100 w-[125%]">
        <AccordionSummary
          sx={{ color: "#0756AF" }}
          className="summary"
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Consulting Analyst, Mumbai
        </AccordionSummary>

        <AccordionDetails className="details">
          <div className="flexbox text-sm">
            <p>
              <b>Requisition ID:</b>
              {` 2400002533`}
            </p>
            <p>
              <b>Job:</b>
              {` Consulting`}{" "}
            </p>
            <p>
              <b>Work Locations:</b>
              {` India`}
            </p>
            <p>
              <b>Schedule:</b>
              {` Full-time`}
            </p>
            <p>
              <b>Employee Status:</b>
              {` Permanent`}
            </p>
          </div>
        </AccordionDetails>

        <div className="grid grid-col-12  pb-4  ">
          <div className="tags col-start-2 col-span-1 relative shrink">
            {/* <div className={styles.tags}> */}
            <Chip label="Financial Markets" variant="filled" color="primary" />
            <Chip
              label="MBA"
              variant="filled"
              color="success"
              sx={{ marginLeft: 1 }}
            />
            {/* </div> */}
          </div>
          <div className="action-buttons col-start-5 relative">
            <Button
              variant="contained"
              className="bg-[#1976d2] btn-sm"
              onClick={() => onClickHandler(3)}
            >
              Get Recommendations
            </Button>
            <Button
              variant="outlined"
              className="btn-sm"
              onClick={() => {
                window.open(
                  `https://www.sc.com/en/global-careers/early-careers/our-programmes/graduates/`,
                  "_blank"
                );
              }}
              sx={{ marginLeft: 1, marginRight: 2 }}
            >
              SEE JOB
            </Button>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Dashboard;
