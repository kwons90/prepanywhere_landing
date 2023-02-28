import React from 'react';
import checkIcon from "../images/check_icon.png"
import change_plan from './school'
const Pricing = () => {
    return (
        <section className="pricing">
            <div className="pricing_wrap">
                <div className="pricing_header">Pricing Plans</div>
                <div className="pricing_subheader">
                    <div className="pricing_subheader1">Math tutoring accessible to all students.</div>
                    <div className="pricing_subheader2">Choose your Plan.</div>
                </div>
                <div className="mobile_plan_switcher">
                    <div className="dot_wrapper">
                        <button id="dot1" onClick={(e) => change_plan(e)} style={{ backgroundColor: 'rgb(64, 152, 249)' }}></button>
                        <button id="dot2" onClick={(e) => change_plan(e)} style={{}}></button>
                    </div>
                </div>
                <div className="plans">
                    <div className="plan1" id="plan1">
                        <div className="plan1_box box">
                            <div className="header">Videos + A.I.</div>
                            <div className="pricing">
                                <div className="money">$9</div>
                                <div className="student">/ Student</div>
                            </div>
                            <a className="getting" href="https://app.prepanywhere.com/signup">
                                <span>Start as low as $9/month</span>
                            </a>
                        </div>
                        <div className="mini_header">Basic Try-It Includes</div>
                        <div className="items">
                            <div className="item">
                                <img src={checkIcon} alt="check icon" />
                                <div className="item_text">Full Textbook Solutions</div>
                            </div>
                            <div className="item">
                                <img src={checkIcon} alt="check icon" />
                                <div className="item_text">Lectures for Each Question Type</div>
                            </div>
                            <div className="item">
                                <img src={checkIcon} alt="check icon" />
                                <div className="item_text">Unlimited Similar Questions</div>
                            </div>
                        </div>
                    </div>
                    <div className="plan2" id="plan2">
                        <div className="plan2_box box">
                            <div className="header">PrepBox Tutor</div>
                            <div className="pricing">
                                <div className="money">$15</div>
                                <div className="student">/ Hour</div>
                            </div>
                            <a className="getting" href="https://prepbox.io">
                                <span>Start as low as $15/hr </span>
                            </a>
                        </div>
                        <div className="mini_header">Full Tutor Includes</div>
                        <div className="mini_subheader">Everything in Basic, plus*</div>
                        <div className="items">
                            <div className="item">
                                <img src={checkIcon} alt="check icon" />
                                <div className="item_text">Practice &amp; get Feedback</div>
                            </div>
                            <div className="item">
                                <img src={checkIcon} alt="check icon" />
                                <div className="item_text">Connection to Tutor</div>
                            </div>
                            <div className="item">
                                <img src={checkIcon} alt="check icon" />
                                <div className="item_text">Measure Test Readiness</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ask_us">
                    <div className="text">Need More Customization?</div>
                    <a className="getting" href="https://app.prepanywhere.com/student/prep/schools">Ask Us!</a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;