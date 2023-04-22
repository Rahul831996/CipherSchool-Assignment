import React, { Fragment, useState } from 'react'
import "./bottomNavigation.css"
import { AiFillHome } from 'react-icons/ai';
import { RiDeviceFill } from 'react-icons/ri';
import { MdOutlineExplore } from 'react-icons/md';
import { BsPersonFill } from 'react-icons/bs';



import { BsPersonFillCheck } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';
import { IoMdLogOut } from 'react-icons/io';
import { MdWatchLater } from 'react-icons/md';
import { RiFileList2Fill } from 'react-icons/ri';
import { AiFillLike } from 'react-icons/ai';


const BottomNavigation = () => {

    const [profileOprionSelect, setProfileOptions] = useState(false)
    return (
        <Fragment>
            <div className="bottomNav">

                <div className="bottomTube">
                    <div className='bottomSqaure'><a href="#"><AiFillHome /><h4>Home</h4></a>
                    </div>
                    <div className='bottomSqaure'><a href="#"><RiDeviceFill /><h4>Courses</h4></a></div>
                    <div className='bottomSqaure'><a href="#"><MdOutlineExplore /><h4>Trending</h4></a></div>
                    <div className='bottomSqaure activeBtn' onClick={() => setProfileOptions(!profileOprionSelect)}><a href="#"><BsPersonFill /><h4>Profile</h4></a>
                     { profileOprionSelect &&  <div className="profileOptions">
                             <a href="#"><div className="profileOprionSelect"><MdDashboard/>  <span>Dashboard</span></div></a>
                             <a href="#"><div className="profileOprionSelect"><BsPersonFill/><span>My Profile</span></div></a>
                             <a href="#"><div className="profileOprionSelect"><RiDeviceFill/><span>Endrolled Courses</span></div></a>
                             <a href="#"><div className="profileOprionSelect"><BsPersonFillCheck/><span>Following</span></div></a>
                             <a href="#"><div className="profileOprionSelect"><MdWatchLater/><span>My Cipher Points</span></div></a>
                             <a href="#"><div className="profileOprionSelect"><RiFileList2Fill/><span>Wishlist</span></div></a>
                             <a href="#"><div className="profileOprionSelect"><AiFillLike/><span>Liked Videos</span></div></a>
                             <a href="#"><div className="profileOprionSelect"><IoMdLogOut/><span>Logout</span></div></a>
                        </div>}
                    </div>

                </div>
            </div> 
        </Fragment>
    )
}

export default BottomNavigation