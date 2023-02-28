import React from 'react';
import appleLogo from '../images/ic_apple.png'
import appLogo from '../images/logo.png'
const StickyBanner = () => {
  return (
    <section className="sticky_banner">
      <div className="sticky_banner_wrap">
        <div className="app_logo">
          <img src={appLogo} alt="Logo" />
        </div>
        <div className="sticky_banner_text">
          <div className="sticky_banner_header">Get yourself a Math expert for Free!</div>
          <div className="sticky_banner_subheader">Take a pic and find the right set of tutorials from our proprietary growing library of 70K videos.</div>
        </div>
        <div className="app_download">
          <a className="getting" href="https://apps.apple.com/ca/app/prepanywhere/id1626502861">
            <img src={appleLogo} alt="Download for iOS" />
            <span>Download for free</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StickyBanner;