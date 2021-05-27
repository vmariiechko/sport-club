import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';
import classes from './MoreInfo.module.css';
import TwitterIcon from '../../assets/images/twitter_icon.svg';
import InstaIcon from '../../assets/images/insta_icon.svg';
import FaceIcon from '../../assets/images/face_icon.svg';
import LinkedinIcon from '../../assets/images/linkedin_icon.svg';
import { toAboutBlock, toContactBlock } from "../../store/navbarReducer/navbarReducer";
import scrollToBlock from '../../scrollTo';

const MoreInfo = ({scrollTo}) => {
    const InfoBlock = useRef(null);
    const QuestionBlock = useRef(null);

    useEffect(() => {
        if (scrollTo === toAboutBlock) {
            scrollToBlock(InfoBlock.current.offsetTop);
        } else if (scrollTo === toContactBlock) {
            scrollToBlock(QuestionBlock.current.offsetTop);
        }
    }, [scrollTo]);

    return (
        <div className={classes.MoreInfo}>
            <div ref={InfoBlock} className={classes.Info}>
                <div>
                    <h1>BEST GYM ON MARS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra placerat purus, quis mattis ligula mattis et. Curabitur hendrerit lectus eget est finibus, ac malesuada sapien porttitor. Aliquam scelerisque suscipit tristique. Vivamus a augue dignissim, porttitor augue eu, facilisis dui. Ipsum placerat lacus</p><br/>
                    <span>Gustavslung 99</span><br/>
                    <span>167-51 BROMMA</span><br/>
                    <span>Tel: +48 589 654 123</span><br/>
                    <span>info@bgom.com</span><br/><br/>
                    <div className={classes.Icons}>
                        <ReactSVG src={TwitterIcon} />
                        <ReactSVG src={InstaIcon} />
                        <ReactSVG src={FaceIcon} />
                        <ReactSVG src={LinkedinIcon} />
                    </div>
                </div>
            </div>
            <div ref={QuestionBlock} className={classes.Question}>
                <div>
                    <h2>Have a question?</h2>
                    <div className={classes.Inputs}>
                        <input placeholder='Your name'/>
                        <input placeholder='Your mail'/>
                        <input placeholder='Your question'/>
                    </div>
                    <div className={classes.Submit}>Send</div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({scrollTo: state.navbar.scrollTo});
  
export default connect(mapStateToProps)(MoreInfo);