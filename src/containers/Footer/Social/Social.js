import React from 'react';
import './Social.css';


const social = (props) => {
    const listItems = props.icons.map( (icon) => 
        <li key={icon}><i className={icon}></i></li>
    )
    return (
        <ul className="Social">
            {listItems}
        </ul>
    )
};

export default social;