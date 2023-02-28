import React from 'react';
import ic_PrepBox from '../images/ic_PrepBox.png'
import prepbook from "../images/prepbook.png"
const PrepBox = () => {
    return (
        <section className="prepbox">
            <div className="prepbox_wrap">
                <div className="header_wrap">
                    <div className="prepbox_img">
                        <img src={ic_PrepBox} alt="PrepBox icon" />
                    </div>
                    <a href="https://prepbox.io" className="link_button">
                        <div className="bubble">
                            <p>Book Assessment</p>
                        </div>
                    </a>
                    <div className="prepbox_header">
                        <div className="sg1">Work with a</div>
                        <div className="sg2"> experienced tutors</div>
                        <div className="sg3"> and</div>
                        <div className="sg4"> A.I.<br />Unlimited similar problems</div>
                        <div className="sg5"> for test prep.<br /></div>
                        <div className="sg6"> Real time feedback</div>
                        <div className="sg7"> and marking.</div>
                    </div>
                </div>
                <div className="prepbook_img">
                    <img src={prepbook} alt="PrepBook" />
                </div>
            </div>
        </section>
    );
};

export default PrepBox;