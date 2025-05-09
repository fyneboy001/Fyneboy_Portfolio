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
      <div className="bg-blue-400/85 lg:rounded-t-[10rem] rounded-t-[7rem] lg:px-32 px-8 relative pt-20">
        <div className="lg:h-36 h-17 lg:w-[18%] w-[40%] bg-blue-400 absolute lg:left-[-2.63rem] left-[-2rem] lg:rounded-t-[20rem] rounded-t-[10rem] rotate-90 lg:top-[-2rem] top-0 opacity-75"></div>
        <div className="lg:h-36 lg:w-[18%] h-17 w-[40%] bg-blue-400 absolute lg:right-[-2.6rem] right-[-2rem] lg:rounded-t-[20rem] rounded-t-[10rem] rotate-270 lg:top-[-2rem] top-0 opacity-75"></div>
        <h1 className="font-bold text-center text-4xl mt-[-10px] pb-8">
          Contact
        </h1>
        <div className="lg:flex">
          <div className="lg:h-[58.59vh] h-[45vh] lg:w-[50%] w-[100%]">
            <h4 className="font-bold py-4 text-2xl">Drop me a message</h4>
            <p className="pb-4 hidden lg:block">
              For further inquiries, collaboration or hire <br /> please drop a
              message for me and I will reach <br /> out for delegations
            </p>
            <p className="pb-4 lg:hidden block">
              For further inquiries, collaboration or hire please drop a message
              for me and I will reach out for delegations
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
        <div className="flex justify-between items-center lg:py-5 py-1">
          <h1 className="font-extrabold lg:text-6xl text-2xl">FR</h1>
          <p className="text-[10px] lg:text-xl">All Rights Reserved</p>
          <div className="flex lg:gap-4 gap-2">
            <a href="https://github.com/fyneboy001" target="_blank">
              <img src={githubIcon} alt="GitHub Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/fyneboy-rosemary-724810322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </a>
            <a href="https://x.com/fyneboy4eva?s=09" target="_blank">
              <img className="lg:h-8 h-4" src={XIcon} alt="X Icon" />
            </a>
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
    <section className="bg-gradient-to-br from-blue-300 to-blue-600 rounded-2xl lg:w-[30%] w-[100%] px-4 shadow-2xl shadow-blue-600/50 h-80 py-5 lg:ml-20">
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
          className="bg-gray-950 h-9 font-bold w-[40%] rounded-[10px] cursor-pointer"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};
export default Contact;
