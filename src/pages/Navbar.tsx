import React from 'react';
import { faGear, faUser, faBriefcase, faTasks, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import Box from '../components/Header/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const categories = [
    { name: 'Personal', icon: faUser },
    { name: 'Professional', icon: faBriefcase },
    { name: 'Work', icon: faTasks },
    { name: 'Temp', icon: faThermometerHalf },
    { name: 'Temp', icon: faThermometerHalf }
];

const Layout: React.FC = () => {


    return (
        <div className="z-20 fixed top-0 flex flex-row items-center h-[40px] w-[640px] bg-gray-100 px-2 shadow-md">
            <div className='flex flex-row gap-2 w-full justify-between'>
                <Box categories={categories} />
            </div>
            <div className="flex flex-row gap-2 ml-2 items-center p-2 w-15 rounded-sm border-black">
                <FontAwesomeIcon icon={faGear} />
            </div>




        </div>
    );
};

export default Layout;
