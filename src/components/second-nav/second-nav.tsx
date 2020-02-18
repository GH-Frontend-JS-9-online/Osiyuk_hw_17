import React from "react";

function secondNav(){
  return(
    <nav className="second-nav">
      <div className="second-nav__block">
        <button type="button" name="button"><label>All projects</label></button>
        <button type="button" name="button"><label>Workflow</label></button>
      </div>
      <div className="second-nav__filter">
        <label className="second-nav__filterText">Show projects:</label>
        <select className="second-nav__filterSelect">
          <option>Date</option>
          <option>Option</option>
       </select>
      </div>
    </nav>
  )
}

export default secondNav;
