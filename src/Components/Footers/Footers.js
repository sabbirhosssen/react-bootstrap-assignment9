import React from 'react';

const Footers = () => {
    return (
        <div className="m-0 bg-black text-white">
            <div className="container">
                <div className="row py-3">
                    {/* colam 1  */}
                    <div className="col-md-4 col-sm-6">
                        <h4>Our Programing School</h4>
                        <h5>Contract Number :</h5>
                        <h5>+0087463745</h5>
                    </div>
                    {/* colam 3  */}
                    <div className="col-md-4 col-sm-6">
                        <h4>Programing activity</h4>
                        <ul className="list-unstyled">
                            <li>About</li>
                            <li>Service</li>
                            <li>Customer</li>
                            <li>Contract</li>
                        </ul>
                    </div>
                    {/* colam 3  */}
                    <div className="col-md-4 col-sm-6">
                        <h4>Social Media</h4>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>linkin</li>
                            <li>instragram</li>
                            <li>Twiter</li>
                        </ul>
                    </div>

                </div>
                <p className="text-white p-3">Copyright © 2021 Programming-school.eu.com</p>
            </div>

        </div>
    );
};

export default Footers;