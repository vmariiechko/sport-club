import React from 'react';
import classes from './Post.module.css';
import TwitterIcon from '../../../assets/images/twitter_icon.svg';
import InstaIcon from '../../../assets/images/insta_icon.svg';
import FaceIcon from '../../../assets/images/face_icon.svg';
import LinkedinIcon from '../../../assets/images/linkedin_icon.svg';
import { ReactSVG } from 'react-svg';

const Post = ({image}) => {
    return (
        <div className={classes.Post}>
            <div className={classes.Data}>
                <h3>END OF A HARD DAY</h3>
                <h5>10 May, 2021</h5><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra placerat purus, quis mattis ligula mattis et. Curabitur hendrerit lectus eget est finibus, ac malesuada sapien porttitor. Aliquam scelerisque suscipit tristique. Vivamus a augue dignissim, porttitor augue eu, facilisis dui. Ipsum placerat lacus</p><br/>
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