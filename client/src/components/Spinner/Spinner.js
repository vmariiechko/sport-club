import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className='spinner'>
            <div className="spinner__inner">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
        </div>
    );
};

export default Spinner;