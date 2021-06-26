import React from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './allposts.css';

export default function AllPosts() {
    return (
        <>
        <div className="allposts">
            <Posts />
            {/* <Sidebar /> */}
        </div>
        </>
    )
}
