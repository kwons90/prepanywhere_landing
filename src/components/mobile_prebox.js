import React from "react";
import prepbox_logo from "../images/prepbox_logo.png"
import prepbook_hint from "../images/prepbook_hint.png"

function PrepBoxMobile() {
  return (
    <section className="prepbox_mobile">
      <div className="prepbox_container">
        <div className="logo">
          <img src={prepbox_logo} alt="PrepBox Logo" />
        </div>
        <div className="small_text">PrepBox</div>
        <div className="main_text">
          Get personalized material for optimized learning path or to prepare for your next test.
        </div>
        <div className="bg_img">
          <img src={prepbook_hint} alt="PrepBox Hint" />
        </div>
      </div>
    </section>
  );
}

export default PrepBoxMobile;