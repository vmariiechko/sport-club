import React from 'react';
import classes from './Blog.module.css';
import image1 from '../../assets/images/3.png';
import image2 from '../../assets/images/1.jpg';
import image3 from '../../assets/images/2.jpg';
import image4 from '../../assets/images/4.jpg';
import image5 from '../../assets/images/3.jpg';
import Post from './Post/Post';

const Blog = () => {
    return (
        <div className={classes.Blog}>
            <div className={classes.Header}>
                <h2>Our Blog</h2>
                <p>Welcome to our blog. Here we will post news and updates</p>
            </div>
            <div className={classes.Cards}>
                <Post image={image1} />
                <Post image={image2} />
                <Post image={image3} />
                <Post image={image4} />
                <Post image={image5} />
            </div>
        </div>
    );
};

export default Blog;