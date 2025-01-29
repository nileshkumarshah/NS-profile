import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import resumePDF from "../../assets/nilesh_resume.pdf";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold  leading-normal tracking-tighter">
          <TextChange />
        </h1><br/>

        <p className="text-sm md:text-2xl tracking-tight">
        <p>A Python Software Engineer specializes in building software applications using Python. They work on a variety of projects, from web development and data analysis to artificial intelligence (AI), machine learning (ML), and backend services.</p><br />
        
        </p>
        <a href="#Footer" className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </a>

        <a className="mt-12 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]" href={resumePDF} download>
            Resume
           
        </a>

      </div>
      <div>
        <img className="" src={avatarImg} alt="" width="450" height="600" />
      </div>
    </div>
  );
};

export default Home;
