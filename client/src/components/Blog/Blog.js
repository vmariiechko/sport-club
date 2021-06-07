import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import classes from './Blog.module.css';
import Post from './Post/Post';
import { toNewsBlock } from "../../store/navbarReducer/navbarReducer";
import { setPostsAC } from "../../store/postsReducer/postsReducer";
import scrollToBlock from '../../scrollTo';

const Blog = ({scrollTo, setPosts, loading, posts}) => {
    const BlogBlock = useRef(null);

    useEffect(() => {
        if (scrollTo === toNewsBlock) {
            scrollToBlock(BlogBlock.current.offsetTop);
        }
    }, [scrollTo]);

    useEffect(() => {
        setPosts();
    }, []);

    return (
        <div ref={BlogBlock} className={classes.Blog}>
            <div className={classes.Header}>
                <h2>Our Blog</h2>
                <p>Welcome to our blog. Here we will post news and updates</p>
            </div>
            <div className={classes.Cards}>
                {loading ?
                    <div></div>
                    :
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    scrollTo: state.navbar.scrollTo,
    loading: state.posts.loading,
    posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
    setPosts: () => {
        dispatch(setPostsAC())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Blog);