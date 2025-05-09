import React from "react";
import callIcon from "../assets/Icons/call.png";
import emailIcon from "../assets/Icons/mail.png";
import locationIcon from "../assets/Icons/location.png";
import githubIcon from "../assets/Icons/Github.png";
import linkedinIcon from "../assets/Icons/linkedin.png";
import XIcon from "../assets/Icons/XIcon.png";

function Contact() {
  return (
    <section className="text-white bg-gray-950 h-[95vh]">
      <div className="bg-blue-400/85 rounded-t-[10rem] px-32 relative pt-20">
        <div className="h-36 w-[18%] bg-blue-400 absolute left-[-2.63rem] rounded-t-[20rem] rotate-90 top-[-2rem] opacity-75"></div>
        <div className="h-36 w-[18%] bg-blue-400 absolute right-[-2.6rem] rounded-t-[20rem] rotate-270 top-[-2rem] opacity-75"></div>
        <h1 className="font-bold text-center text-4xl mt-[-10px] pb-8">
          Contact
        </h1>
        <div className="flex">
          <div className="h-[58.59vh] w-[50%]">
            <h4 className="font-bold py-4 text-2xl">Drop me a message</h4>
            <p className="pb-4">
              For further inquiries, collaboration or hire <br /> please drop a
              message for me and I will reach <br /> out for delegations
            </p>
            <div>
              <Details iconName={callIcon} text="+234 8052606138" />
              <Details iconName={emailIcon} text="fyneboyfynerose@gmail.com" />
              <Details iconName={locationIcon} text="Port Harcourt, Nigeria" />
            </div>
          </div>
          <Form />
        </div>
        <hr />
        <div className="flex justify-between items-center py-5">
          <h1 className="font-extrabold text-6xl">FR</h1>
          <p>All Rights Reserved</p>
          <div className="flex gap-4 ">
            <img src={githubIcon} alt="GitHub Icon" />
            <img src={linkedinIcon} alt="LinkedIn Icon" />
            <img className="h-8" src={XIcon} alt="X Icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

const Details = (props) => {
  return (
    <>
      <div className="flex gap-8 py-2">
        <img src={props.iconName} alt="" />
        <p>{props.text}</p>
      </div>
    </>
  );
};

const Form = () => {
  const Style = "py-2 ";
  const inputStyle = "h-9 w-[100%] bg-gray-950 px-3 rounded-[10px]";
  return (
    <section className="bg-gradient-to-br from-blue-300 to-blue-600 rounded-2xl w-[30%] px-4 shadow-2xl shadow-blue-600/50 h-80 py-5 ml-20">
      <form action="text">
        <div className={Style}>
          <input
            className={inputStyle}
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
          />
        </div>
        <div className={Style}>
          <input
            className={inputStyle}
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
        </div>
        <div className={Style}>
          <input
            className="h-30 w-[100%] bg-gray-950 px-3 rounded-[10px]"
            type="text"
            placeholder="Message"
          />
        </div>
        <button
          className="bg-gray-950 h-9 font-bold w-[40%] rounded-[10px]"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};
export default Contact;
