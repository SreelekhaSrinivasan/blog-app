import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';

export default function TopBar(){

    return(
        <div className='top-bar'>
            <div className="topLeft">
                {/* <i className="topIcon fa fa-solid fa-hashtag"></i>
                <i className="topIcon fa fa-solid fa-heart"></i> */}
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/blogs">POSTS</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/blog/new">WRITE</Link>
                    </li>
                </ul>
            </div>
            {/* <div className="topRight">
                <img className="topImg" src="https://thumbs.dreamstime.com/b/smiling-young-indian-lady-looking-camera-home-headshot-portrait-smiling-young-adult-indian-woman-looking-camera-home-199970396.jpg" alt='profilePic' />
            </div> */}
        </div>
    )
}