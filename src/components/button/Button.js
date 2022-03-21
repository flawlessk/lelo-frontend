import React from "react";
import './Button.css';

const Button = ({ name, buttonStyle }) => {
    return (
        <div className={buttonStyle ? 'sessionBtn' : 'topContentBtn'}>
            {name}
        </div>
    )
};

export default Button;