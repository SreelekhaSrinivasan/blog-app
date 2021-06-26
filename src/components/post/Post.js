import React from 'react';
import './post.css';

export default function Post() {
    return (
        <div className='post'>
            <img className="postImg" 
            src="https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png" 
            alt="post"/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    {/* <span className="postCat">Life</span> */}
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">Posted 1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt, 
                quidem obcaecati vel rem corrupti facilis illum corporis, voluptatem, 
                sed quis nesciunt tenetur quam quasi magni nostrum quos cum odio.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt, 
                quidem obcaecati vel rem corrupti facilis illum corporis, voluptatem, 
                sed quis nesciunt tenetur quam quasi magni nostrum quos cum odio.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt, 
                quidem obcaecati vel rem corrupti facilis illum corporis, voluptatem, 
                sed quis nesciunt tenetur quam quasi magni nostrum quos cum odio.
            </p>
        </div>
    )
}
