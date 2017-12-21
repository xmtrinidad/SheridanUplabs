import React from 'react';
import './FooterList.css';



const footerList = (props) => {
    const listItems = props.listItems.map( (item, index) => <li key={item}>{item}</li>)
    const section = (
        <div className="footer-section">
            <h5 className="footer-section__title">{props.title}</h5>
            <ul className="footer-section__list">
                {listItems}
            </ul>
        </div>
    );
    return (
        <React.Fragment>
            {section}
        </React.Fragment>
    )
};

export default footerList;