import React from 'react'
import vite from '../../../public/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faEllipsisVertical, faStar } from '@fortawesome/free-solid-svg-icons';


const Linksicon:React.FC = () => {
    return (
        <>
            <div className='w-36 h-24 m-2 border-[1px] border-black flex flex-row p-2 items-center'>
                <div className='w-3/5 h-auto'>
                    <img src={vite} alt="Vite Logo" className=' top-0 left-0 w-12 h-12 ' />
                </div>
                <div className='flex flex-col w-2/5 '>
                    <h4 className='truncate w-10'>Gamingstar - A journey by ankle of death</h4>
                    <div className='flex flex-row '>
                        <FontAwesomeIcon icon={faShare} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Linksicon