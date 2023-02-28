import React from 'react';
import prepAppImg from '../images/prep-app.png'
import mobilePrepImg from '../images/mobile_prep.png'

const AppBanner = () => {
    return (
        <section className="app_banner">
            <div className="tag_box">
                <div className="tag_small">NOT USING A TEXTBOOK?</div>
                <div className="tag_line">Use Our A.I. Math App to Find Videos<br />for Similar Problems To Help You Learn!</div>
            </div>
            <div className="app_banner_wrap">
                <div className="app_banner_header">Math expert in your pocket</div>
                <div className="app_banner_subheader">Take a picture and find the right set of tutorials from our proprietary growing library of 70K videos.</div>
                <div className="app_download">
                    <a className="getting" href="https://apps.apple.com/ca/app/prepanywhere/id1626502861">
                        <span>Learn more</span>
                    </a>
                </div>
                <div className="screen_image">
                    <img src={prepAppImg} alt="PrepAnywhere app on a device" />
                </div>
                <div className="mobile_image">
                    <img src={mobilePrepImg} alt="PrepAnywhere app on a mobile device" />
                </div>
            </div>
        </section>
    );
};


export default AppBanner;