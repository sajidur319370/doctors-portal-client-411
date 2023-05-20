import React from 'react';
import { Link } from 'react-router-dom';
import footer from "../../../assets/images/footer.png"

const Footer = () => {
    const year = new Date();
    const currentYear = year.getFullYear();
    return (
        <footer style={{ background: `url(${footer})`, backgroundSize: 'contain' }} className="p-10  text-accent">

            <div className='footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='mx-auto'>
                    <span className="footer-title">Services</span>
                    <Link to="" className="link link-hover">Emergency Check Up</Link>
                    <Link to="" className="link link-hover">Daily Check Up</Link>
                    <Link to="" className="link link-hover">Weekly Check Up</Link>
                    <Link to="" className="link link-hover">Monthly Check Up</Link>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Oral Health</span>
                    <Link to="" className="link link-hover">Fluoride Treatment</Link>
                    <Link to="" className="link link-hover">Cavity Filling</Link>
                    <Link to="" className="link link-hover">Teath Whitening</Link>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Our Address</span>
                    <Link to="" className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='text-center mt-20'>
                <p>Copyright&copy;{currentYear}- All right reserved by <span className="font-bold text-secondary">Doctors Portal</span> Organization BD</p>
            </div>

        </footer>
    );
};

export default Footer;