import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isListVisible, setListVisible] = useState(false);
    const [iconMenu, setIcon] = useState(faBars);
    const toggleListVisibility = () => {
        setListVisible(!isListVisible);
        console.log('yes')
    };
    const showBarFun = () => {
      setIcon((prevState) => (prevState === faBars ? faXmark : faBars));
      toggleListVisibility();
    };
    return (
        <div>
            <FontAwesomeIcon className="m-2 z-10 relative sm:block md:hidden lg:hidden" icon={iconMenu} onClick={showBarFun} />
            <ul className={`absolute w-full z-1  left-0 top-0 text-center md:relative md:flex md:flex-row  ${isListVisible ? 'block' : 'hidden'}`}>
                <li className='hover:text-white md:mr-5 lg:text-xl' >
                  <Link to="/about">About</Link>
                  </li>
                <li className='hover:text-white md:mr-5 lg:text-xl'>
                  <Link to="/experience">Experience</Link>
                  </li>
                <li className='hover:text-white md:mr-5 lg:text-xl'>
                  <Link to="/project">Project</Link>
                </li>
                <li className='hover:text-white md:mr-5 lg:text-xl'>
                  <Link to="/contact">Contact</Link>
                  </li>
            </ul>
        </div>
    );
};

export default Navbar;
