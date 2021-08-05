import React, {useState} from 'react';

import Navbar from '../../components/Navbar';
import MobileNavbar from '../../components/MobileNavbar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="Home">
            <Navbar toggleNav={toggleNav} />
            <MobileNavbar isOpen={isOpen} toggleNav={toggleNav} />
        </div>
    )
}

export default Home;
