import React from "react";
import basentImg from "../../assets/basent.jpg";
import ieslImg from "../../assets/iesl.jpg";
import sasImg from "../../assets/saspng.png";
import webllistoImg from "../../assets/webllistopng.png";

import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiOracle } from "react-icons/si"; 
import { BiLogoPostgresql } from "react-icons/bi";
import { FaJenkins } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";
import { SiNginx } from "react-icons/si";
import { SiGunicorn } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

import { RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <SiPython color="#4584b6" size={50} />
            <span class="tooltiptext">Python</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <SiDjango color="#33cc33" size={50} />
            <span class="tooltiptext">Django</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip" >
            <SiFlask color="#E34F26" size={50} />
            <span class="tooltiptext">Flask</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <SiFastapi color="#E34F26" size={50} />
            <span class="tooltiptext">Fast API</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <SiPandas color="#b35900" size={50} />
            <span class="tooltiptext">Pandas</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <SiNumpy color="#e60000" size={50} />
            <span class="tooltiptext">NumPy</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <SiMysql color="#0000e6" size={50} />
            <span class="tooltiptext">MySQL</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <SiOracle color="#E34F26" size={50} />
            <span class="tooltiptext">Oracle PL/SQL</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <BiLogoPostgresql color="#1a1aff" size={50} />
            <span class="tooltiptext">PostgreSQL</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <SiMongodb color="#47A248" size={50} />
            <span class="tooltiptext">MongoDB</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <SiRedis color="#FF4438" size={50} />
            <span class="tooltiptext">Redis</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <FaJenkins color="#f2f2f2" size={50} />
            <span class="tooltiptext">Jenkins</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <IoLogoDocker color="#3333ff" size={50} />
            <span class="tooltiptext">Docker</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <SiNginx color="#009639" size={50} />
            <span class="tooltiptext">Nginx</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <SiGunicorn color="#009900" size={50} />
            <span class="tooltiptext">Gunicorn</span>
          </span> 
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <FaCss3 color="#1572B6" size={50} />
            <span class="tooltiptext">CSS3</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <FaReact color="#61DAFB" size={50} />
            <span class="tooltiptext">React JS</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip"> 
            <FaJs color="#F7DF1E" size={50} />
            <span class="tooltiptext">FaJs</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <FaFigma color="#F24E1E" size={50} />
            <span class="tooltiptext">Figma</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl tooltip">
            <FcLinux color="#F24E1E" size={50} />
            <span class="tooltiptext">Linux</span>
          </span>
          
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img className="" src={sasImg} alt="" width="120" height="110" />
            <span className="text-white">
              <h2 className="leading-tight">Senior Software Engineer , SAS Tech Studio Pvt. Ltd.</h2>
              <p className="text-sm leading-tight font-thin">
                Jun 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Senior software developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          <img className="" src={webllistoImg} alt="" width="120" height="110" />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Webllisto Technologies Pvt. Ltd.</h2>
              <p className="text-sm leading-tight font-thin">
              Nov'22-Apr'23 
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer.</li>
                <li>- SDE-developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          <img className="" src={ieslImg} alt="" width="120" height="110" />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Innovative e-Solution Enterprise - IESL </h2>
              <p className="text-sm leading-tight font-thin">
              Aug'21-Nov'22 
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer.</li>
                <li>- Python-developer</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img className="" src={basentImg} alt="" width="120" height="110" />
            <span className="text-white">
              <h2 className="leading-tight">Python Developer, Besant Technologies </h2>
              <p className="text-sm leading-tight font-thin">
              Dec'19-Fib'20 
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Python developer.</li>
                <li>- python & Django developer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
