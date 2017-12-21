import React, { Component } from 'react';
import './Footer.css';

import FooterList from './FooterList/FooterList';
import Social from './Social/Social';

class Footer extends Component {
    state = {
        footerList: [
            {
                id: 1,
                title: 'Information',
                listItems: [
                    'Help',
                    'Delivery & Returns',
                    'Find a Store',
                    'Click & Collect',
                    'Afterpay',
                    'Warranty Information'
                ]
            },
            {
                id: 2,
                title: 'Contact Us',
                listItems: [
                    '1800 223 376',
                    '8:00AM - 5:30PM',
                    'Find a Store',
                    'AEST MON - FRI',
                    'Email Us',
                ]
            },
            {
                id: 3,
                title: 'Corporate',
                listItems: [
                    'Terms & Conditions',
                    'Privacy Policy',
                    'Terms of Use',
                    'Careers',
                    'Wholesale Enqueries',
                ]
            },
            {
                id: 4,
                title: 'About Us',
                listItems: [
                    'About Us',
                    'Sheridan Gift Cards',
                    'Shop Social',
                    'Become a Member',
                ]
            }
        ],
        social: [
            'fab fa-facebook-f',
            'fab fa-instagram',
            'fab fa-pinterest-p',
            'fab fa-youtube' 
        ]
    }
    render() {
        const footerLists = this.state.footerList.map( (f) =>
        <FooterList 
            key={f.id}
            title={f.title}
            listItems={f.listItems} />
    )
        return (
            <div className="Footer container">
                <div className="footer-sections">
                    {footerLists}
                </div>
                <div>
                    <Social icons={this.state.social}/>
                </div>
                <div className="copyright">
                    <small>&copy; COPYRIGHT SHERIDAN LIFE</small>
                </div>
            </div>
        )
    }
}

export default Footer;