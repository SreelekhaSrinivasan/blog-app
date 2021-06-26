import React from 'react';
import './singlepost.css';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://socialmarketingfella.com/wp-content/uploads/2016/04/blog.jpg" 
                alt="Single Post" 
                className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Sree</b></span>
                    <span className="singlePostDate">Posted 1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores illum consequatur? Placeat molestias autem natus, dolores eaque rem dolorum harum cupiditate repellendus voluptatum cumque nihil, esse, sit ex vitae.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores illum consequatur? Placeat molestias autem natus, dolores eaque rem dolorum harum cupiditate repellendus voluptatum cumque nihil, esse, sit ex vitae.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores illum consequatur? Placeat molestias autem natus, dolores eaque rem dolorum harum cupiditate repellendus voluptatum cumque nihil, esse, sit ex vitae.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores illum consequatur? Placeat molestias autem natus, dolores eaque rem dolorum harum cupiditate repellendus voluptatum cumque nihil, esse, sit ex vitae.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores illum consequatur? Placeat molestias autem natus, dolores eaque rem dolorum harum cupiditate repellendus voluptatum cumque nihil, esse, sit ex vitae.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores illum consequatur? Placeat molestias autem natus, dolores eaque rem dolorum harum cupiditate repellendus voluptatum cumque nihil, esse, sit ex vitae.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores illum consequatur? Placeat molestias autem natus, dolores eaque rem dolorum harum cupiditate repellendus voluptatum cumque nihil, esse, sit ex vitae.
                </p>
            </div>
        </div>
    )
}
