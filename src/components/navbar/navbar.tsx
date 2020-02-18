import React from "react";

function navBar(){
  return(
    <nav className="nav">
      <div className="nav__wrapp">
        <i><img src="./img/home.png" alt="homeIcon"></img></i>
        <i><img src="./img/menu.png" alt="menuIcon"></img></i>
        <i><img src="./img/trending-up.png" alt="trending-up Icon"></img></i>
        <i><img src="./img/email.png" alt="emailIcon"></img></i>
        <i><img src="./img/accounts.png" alt="accountsIcon"></img></i>
      </div>
    </nav>
  )
}

export default navBar;
