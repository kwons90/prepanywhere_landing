import React from 'react';
import bannerVideo from '../images/banner_video.mp4';

function VideoBanner() {
    return (
        <div className="video_wrap">
            <video autoPlay loop muted playsInline>
                <source src={bannerVideo} type="video/mp4" />
            </video>
            <div className="search_wrap">
                <div className="tag_line">WELCOME TO PREPANYWHERE</div>
                <div className="search_heading">World Class<br />Math Tutoring for Everyone</div>
                <div className="search_description">Find helpful video for every problem in your Math textbook.</div>
                <div className="signup_btn">
                    <a href="https://app.prepanywhere.com/signup">Sign Up &amp; Get Started</a>
                </div>
                <div className="searcher">
                    <div className="search_heading">Discover more with Textbook Detective</div>
                    <div className="search_btn">
                        <a href="https://app.prepanywhere.com/student/prep/textbooks">Search by ISBN, title, or Author's name</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoBanner;