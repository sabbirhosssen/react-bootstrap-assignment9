import React from 'react';
import Footers from '../Footers/Footers';

const Contract = () => {
    const style = {
        height: "60vh"
    }
    return (
        <div style={style}>
            <h1 className="py-4"> Contact </h1>
            <h4>Number : +0098763564</h4>

            <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Twiter</li>
                <li>instragram</li>
                <li>linkin</li>
            </ul>
        </div>
    );
};

export default Contract;