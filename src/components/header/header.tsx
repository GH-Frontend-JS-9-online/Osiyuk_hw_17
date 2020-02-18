
import React from "react";

function header(){
  return(
    <header>
      <section className="header__logo">
        <img src="./img/logo.png" alt="logo"></img>
      </section>
      <section className="header__block">
        <button type="button" name="button" className="header__addbtn">Add <label>+</label> </button>
        <button type="button" name="button" className="header__searchBtn"><img src="./img/searchIcon.png" alt="searchIcon"></img></button>
        <button type="button" name="button" className="header__notfBtn"><img src="./img/notfIcon.png" alt="notfIcon"></img></button>
        <div className="header__avatar">
          <img src="./img/avatar.png" alt="avatar" className="header__avatarImg"></img>
          <button type="button" name="button" className="header__downBtn"><img src="./img/downIcon.png" alt="downIcon"></img></button>
        </div>
      </section>
    </header>
  )
}

export default header;
