import React, { Fragment } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { RiDeviceFill } from 'react-icons/ri';
import { MdOutlineExplore } from 'react-icons/md';
import { BsPersonFillCheck } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';
import { BsDiscord } from 'react-icons/bs';
import { BsDatabaseFillDown } from 'react-icons/bs';
import { RiCreativeCommonsFill } from 'react-icons/ri';
import { MdFeedback } from 'react-icons/md';
import { GrNavigate } from 'react-icons/gr';
import { IoMdLogOut } from 'react-icons/io';



import "./sideBar.css"
const SideBar = () => {
  return (
    <Fragment>
        <div className="sideBar">
            <div className='sideContent'>
                <div className='sideIcon'><AiFillHome/><h4>Home</h4></div>
                <div className='sideIcon'><RiDeviceFill/><h4>Coureses</h4></div>
                <div className='sideIcon'><MdOutlineExplore/><h4>Trending</h4></div>
                <div className='sideIcon'><BsPersonFillCheck/><h4>Following</h4></div>
                <div className='sideIcon active'><MdDashboard/><h4>Dashboad</h4></div>
                <div className='sideIcon'><BsDiscord/><h4>Discord</h4></div>
                <div className='sideIcon'><BsDatabaseFillDown/><h4>Restoration form</h4></div>
                <div className='sideIcon'><RiCreativeCommonsFill/><h4>Creator access</h4></div>
                <div className='sideIcon'><MdFeedback/><h4>Feedback</h4></div>
                <div className='sideIcon'><GrNavigate/><h4>Tour</h4></div>
                <div className='sideIcon'><IoMdLogOut/><h4>LogOut</h4></div>
            </div>
        </div>
    </Fragment>
  )
}

export default SideBar