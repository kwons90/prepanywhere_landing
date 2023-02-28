import React from "react";

function SchoolsHeader() {
  function navOpen() {
    // implement navigation menu opening logic
  }

  function navClose() {
    // implement navigation menu closing logic
  }

  return (
    <div className="schools_header">
      <div className="header_nav">
        <div className="mobile_nav">
          <a className="open_menu">
            <span onClick={navOpen}>Menu</span>
          </a>
          <div className="nav_menu" id="mobile_menu">
            <a className="mobile_home" href="https://www.prepanywhere.com/">
              <span>Home</span>
            </a>
            <a className="mobile_about" href="https://app.prepanywhere.com/plans">
              <span>About</span>
            </a>
            <a className="mobile_bookshelf" href="https://app.prepanywhere.com/student/prep/textbooks">
              <span>Bookshelf</span>
            </a>
            <a className="mobile_login" href="https://app.prepanywhere.com/login">
              <span>Login</span>
            </a>
            <div className="close_menu">
              <span onClick={navClose}>X</span>
            </div>
          </div>
        </div>
        <a className="logo" href="https://www.prepanywhere.com"></a>
        <nav className="headerNav">
          <a className="home" href="https://www.prepanywhere.com/">
            <span>Home</span>
          </a>
          <a className="about" href="https://app.prepanywhere.com/plans">
            <span>About</span>
          </a>
          <a className="bookshelf" href="https://app.prepanywhere.com/student/prep/textbooks">
            <span>Bookshelf</span>
          </a>
        </nav>
        <div className="buttons">
          <a className="log_in" href="https://app.prepanywhere.com/login">
            <span>Log In </span>
          </a>
          <a className="signup" href="https://app.prepanywhere.com/signup">
            <span>Signup</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SchoolsHeader;