import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';

const FooterDetails = () => {
    return (
        <Navbar className="footer py-1 bg-black text-white">
            <div className='container'>
                {/* Social icons */}
                <div className="socials float-left">
                    <ul className="list-unstyled mt-3 position-relative zindex-1">
                        <li className='mb-3'><a className='text-white' href="https://github.com/Jogwums"><FaGithub size={`2em`} /></a></li>
                        <li className='mb-3'><a className='text-white' href="https://www.kaggle.com/jogwums"><FaKaggle size={`2em`} /></a></li>
                        <li className='mb-3'><a className='text-white' href="https://www.linkedin.com/in/jonathan-ogwumike012016/"><FaLinkedin size={`2em`} /></a></li>
                    </ul>
                </div>
                {/* Footer text */}
                <div className="footer-container px-5 bg-black">
                    <p className="footer-text m-0 small">&copy; Jonathan 2025</p>
                </div>
            </div>
        </Navbar>
    );
};

export default FooterDetails;