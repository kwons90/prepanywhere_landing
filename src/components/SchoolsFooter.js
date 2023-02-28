import React from 'react';

function SchoolsFooter() {
    return (
        <div className="schools_footer">
            <div className="social_wrap">
                <div className="social">
                    <a href="https://app.prepanywhere.com">
                        <div className="pa_logo"></div>
                    </a>
                    <div className="socials">
                        <a className="youtube fa fa-youtube fa-lg" href="https://www.youtube.com/c/Prepanywhere" aria-hidden="true"></a>
                        <a className="twitter fa fa-twitter fa-lg" href="https://twitter.com/prepanywhere?lang=en" aria-hidden="true"></a>
                        <a className="facebook fa fa-facebook fa-lg" href="https://www.facebook.com/mglmath" aria-hidden="true"></a>
                        <a className="linkedin fa fa-linkedin fa-lg" href="https://www.linkedin.com/company/prepanywhere" aria-hidden="true"></a>
                    </div>
                </div>
            </div>
            <div className="legal">
                <a href="https://app.prepanywhere.com/legal/privacy">
                    <span>Privacy Policy</span>
                </a>
                <span>
                    |
                </span>
                <a href="https://app.prepanywhere.com/legal/terms">
                    <span>Terms &amp; Conditions</span>
                </a>
            </div>
        </div>
    );
}

export default SchoolsFooter;