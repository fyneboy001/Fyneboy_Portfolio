import React from "react";
import HTML from "../assets/HTML.jpg";
import CSS from "../assets/CSS.jpg";
import JS from "../assets/JavaScript.png";
import ReactImg from "../assets/React.jpg";
import Node from "../assets/NODE.png";

function Experience() {
  return (
    <section className="text-white bg-gray-950 px-24 h-screen">
      <h1 className="font-bold text-center text-4xl">EXPERIENCES</h1>
      <div className="justify-center items-center flex flex-col mt-15">
        <div className="flex space-x-26">
          <Skills skillPhoto={HTML} skillName="HTML" />
          <Skills skillPhoto={CSS} skillName="CSS" />
          <Skills skillPhoto={JS} skillName="JavaScript" />
        </div>
        <div className="flex space-x-26 mt-10">
          <Skills skillPhoto={ReactImg} skillName="React" />
          <Skills skillPhoto={Node} skillName="Node" />
        </div>
      </div>
    </section>
  );
}

function Skills(props) {
  return (
    <div className="flex">
      <div>
        <img src={props.skillPhoto} alt="HTML Logo" />
        <p>{props.skillName}</p>
      </div>
    </div>
  );
}

export default Experience;
