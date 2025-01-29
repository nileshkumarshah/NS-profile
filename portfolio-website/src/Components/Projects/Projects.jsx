import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-4xl md:text-6xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Finncub"
          main="Finncub NBFCs Microfinance refers to financial services provided to low-income individuals or groups. It specializes in loans exclusively for females, typically excluded from traditional banking services, such as home loans, car loans, business loans, and agricultural loans. Additionally, Finncub Microfinance offers small-scale products like kitchen sets, fans, irons, sewing machines, TVs, and more."
        />
        <ProjectCard
          title="Cangurhu"
          main="Cangurhu is dedicated to providing healthy prepared meal delivery options for its customers. The service understands the impo rtance of
nourishing meals made with wholesome ingredients for overall well-being. Cangurhu's commitment to providing the best food delivery
services extends beyond just the food, as we also prioritize customer satisfaction and convenience. The delivery service is reliable and
punctual, ensuring that the meals are delivered to customers' doorsteps at the scheduled time."
        />
        <ProjectCard
          title="Duval"
          main="The Duval Project, where the foundation of property investment meets the art of growing your wealth through strategic home rent
investments. At Duval, we specialize in developing and investing in iconic residential projects and communities, strategically located in
proximity to key infrastructure, ensuring a seamless blend of luxury and convenience."
        />
        <ProjectCard
          title="Koltm modular"
          main="The Koltm Modular Project offers new houses for sale and rent in New Zealand, providing top-notch facilities for users, particularly
catering to older individuals seeking the best locations and prices. Our experienced house constructors ensure the highest qu ality
construction"
        />
      </div>
    </div>
  );
};

export default Projects;
