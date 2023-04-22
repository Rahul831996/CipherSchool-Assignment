import React, { Fragment, useState } from 'react';
import "./header.css"
import { MdOutlineExplore } from 'react-icons/md';
import { HiOutlineBell } from 'react-icons/hi';
import { CiSearch } from 'react-icons/ci';
import { RiEqualizerLine } from 'react-icons/ri';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import hoverSound from "../../assets/bell.wav"
const Header = () => {

    const [browse, setBrowse] = useState(false);
    const [status, setStatus] = useState(false);
    
    const [audio] = useState(new Audio(hoverSound));

    return (

        <Fragment>
            <nav>
                <div className="container">
                    <div className="content">
                        <div className="logo">
                            <p className='menuBar'><AiOutlineMenu /></p>
                            <div className="logoContent">

                                <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" alt="" />
                                <span className='logoTitle'>CipherSchools</span>
                            </div>

                            <div className="browseContent">
                                <span onClick={() => setBrowse(!browse)}>
                                    <MdOutlineExplore /> Browse <BiChevronDown />

                                    {browse ?
                                        <ul className='browseOptions'>
                                            <li>Web Development</li>
                                            <li>App Development</li>
                                            <li>Data Science</li>
                                        </ul>

                                        : ""
                                    }

                                </span>
                            </div>

                        </div>

                        <div className="navIcons">
                        <div className="search">
                                                <CiSearch />
                                                <input type="text" placeholder='Search and learn' />
                                                <span onClick={() => setStatus(!status)}>
                                                    <RiEqualizerLine />
                                                    {
                                                        status &&
                                                        <ul className='browseOptions'>
                                                            <li>Video</li>
                                                            <li>Course</li>
                                                            <li>Instructor</li>
                                                            <li>All</li>
                                                        </ul>
                                                    }
                                                </span>
                                            </div>
                            <p onMouseOver={() => audio.play()}><HiOutlineBell /><span className='notificationCount'>0</span></p>
                            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header