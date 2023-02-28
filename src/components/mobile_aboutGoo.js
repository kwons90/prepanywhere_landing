import React from "react";
import goo_img from "../images/goo_img.png"
import light_img from "../images/light_img.png"

function AboutGoo() {
  return (
    <section className="about_goo">
      <div className="goo_wrap">
        <div className="text_wrap">
          <div className="small_text">Personalize Teaching</div>
          <div className="heading">
            Our A.I. Goo can find similar examples to lectures
          </div>
          <div className="comment">for middle to high school*</div>
        </div>
        <div className="goo_img">
          <img src={goo_img} alt="Goo" />
        </div>
      </div>
      <div className="progress_wrap">
        <div className="text_wrap">
          <div className="small_text">Time management</div>
          <div className="heading">Manage your own progress</div>
        </div>
        <div className="light_img">
          <img src={light_img} alt="Light" />
        </div>
      </div>
    </section>
  );
}

export default AboutGoo;