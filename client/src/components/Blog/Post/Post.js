import React from 'react';
import classes from './Post.module.css';
import TwitterIcon from '../../../assets/images/twitter_icon.svg';
import InstaIcon from '../../../assets/images/insta_icon.svg';
import FaceIcon from '../../../assets/images/face_icon.svg';
import LinkedinIcon from '../../../assets/images/linkedin_icon.svg';
import { ReactSVG } from 'react-svg';
import toLocalDate from '../../../toLocalDate';

const Post = ({post}) => {
    const {category, title, image, content, published} = post;
    const timestamp = toLocalDate(published);
    
    return (
        <div className={classes.Post}>
            <div className={classes.Data}>
                <h3>{title}</h3>
                <h5>{timestamp}</h5><br/>
                <p>{content}</p><br/>
            </div>
            <div className={classes.Image}>
                <img src={image} alt=''/>
            </div>
            <div className={classes.Buttons}>
                <div className={classes.ButtonsInner}>
                    <div>
                        <ReactSVG src={TwitterIcon} />
                        <ReactSVG src={InstaIcon} />
                        <ReactSVG src={FaceIcon} />
                        <ReactSVG src={LinkedinIcon} />
                    </div>
                    <div>
                        <i className="material-icons" style={{fontSize: '33px'}}>comment</i>
                        <i className="material-icons" style={{fontSize: '33px'}}>favorite_border</i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;