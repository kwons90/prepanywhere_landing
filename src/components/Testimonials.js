import React from 'react';
import testimonials from "../images/testimonial.png"
const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonials_wrap">
                <div className="heading">Testimonials!</div>
                <div className="img_wrap">
                    <img src={testimonials} alt="Testimonial" />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;