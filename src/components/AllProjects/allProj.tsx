
import React from "react";
import NavBar  from '../navbar/navbar';
import SecondNav  from '../second-nav/second-nav';
import ProjectBlock from '../project-block/project';

function allProj(){

  return(
  <main>
    <NavBar />
    <div className="project-wrap">
      <SecondNav />
      <div className="project-block__wrap">
        <ProjectBlock />
      </div>
      <button className="project__create">
        Create Project
      </button>
    </div>
  </main>
  )
}

export default allProj;
