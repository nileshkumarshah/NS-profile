import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.jpg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div className="flex justify-center">
    <div
      id="About"
      // className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12
      className="flex justify-between p-3 text-white overflow-hidden w-[80%] rounded-md shadow-lg h-auto"
    >
   
        <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
          <img className="md:h-80 lg-h-100" src={AboutImg} alt="About img" />
        </div>

        <div>

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                HTML, CSS, JavaScript, responsive design, JavaScript frameworks (React, Angular, Vue.js), version control systems (Git), preprocessors (Sass, Less), build tools (Webpack, Gulp), and accessibility practices.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                SQL (Structured Query Language) as the primary language, along with proficiency in specific database management systems like MySQL, Oracle PL/SQL, PostgreSQL, and knowledge of concepts like data modeling, database design, performance tuning, ETL (Extract, Transform, Load) processes, and data security practices.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Python, Django/Flask (web frameworks), RESTful APIs, relational databases (MySQL, PostgreSQL), NoSQL databases (MongoDB), Jinja2 templating, object-oriented programming (OOP), unit testing frameworks (pytest, unittest), version control (Git), cloud platforms (AWS, GCP, Azure), and any relevant libraries or tools specific to projects.
                </p>
              </span>
            </div>
          </ul>
        </div>
        </div>
    </div>
  );
};

export default About;
