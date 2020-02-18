import React from "react";

function projectBlock(){
  return(
    <div className="projectBlock">
     <div className="project__title">
      <h3 className="project__name h3">New web-site</h3>
      <span className="project__company span">Google</span>
     </div>
     <h3 className="project__value h3">$2000</h3>
     <div className = "project__deadline">
      <h3 className="project__date h3">10 May 2016</h3>
      <span className="project__daysleft span">10 day left</span>
     </div>
     <div className="project__progres">
      <h3 className="project__procents h3">70%</h3>
      <div className="project__progresBar"><div className="project__progresLine"></div></div>
     </div>
     <div className="project__status">
      <h3 className="project__state h3">Development</h3>
     </div>
     <div className="project__assignedTo">
      <img src="./img/avatar2.png"></img>
      <div className="project__assignedInfo">
       <h3 className="project__assidnedBy h3">Dominic Lynton</h3>
       <span className="project__positon span">Fronted dev</span>
      </div>
     </div>
    </div>
  )
}

export default projectBlock;
