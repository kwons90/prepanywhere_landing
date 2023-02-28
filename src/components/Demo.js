import React from 'react';
import bannerVideo from '../images/demo.mp4';

const DemoSection = () => {
  return (
    <section className="demo">
      <div className="demo_container">
        <div className="heading">Here is How It Works!</div>
        <div className="demo_wrap">
          <video autoPlay loop muted playsInline>
            <source src={bannerVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;