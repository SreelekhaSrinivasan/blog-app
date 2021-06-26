import React from 'react';
import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <div className="sidebarTitle">ABOUT ME</div>
                <img src="https://media-exp3.licdn.com/dms/image/C5603AQFSjgXvkJ53rg/profile-displayphoto-shrink_800_800/0/1597853825711?e=1629936000&v=beta&t=94W-QRfgqQD5VFlF8TwWXXJOE9pToqBQJPjiRgmGZfo" alt="" />
                <p>
                    90s Kid.  Just Keep Swimming ...
                </p>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">Likes</div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Pets</li>
                    <li className="sidebarListItem">Anime</li>
                    <li className="sidebarListItem">MCU</li>
                    <li className="sidebarListItem">Gardening</li>
                </ul>
            </div>
        </div>
    )
}
