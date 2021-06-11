import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';
import classes from './MoreInfo.module.css';
import TwitterIcon from '../../assets/images/twitter_icon.svg';
import InstaIcon from '../../assets/images/insta_icon.svg';
import FaceIcon from '../../assets/images/face_icon.svg';
import LinkedinIcon from '../../assets/images/linkedin_icon.svg';
import { toAboutBlock, toContactBlock } from "../../store/navbarReducer/navbarReducer";
import scrollToBlock from '../../scrollTo';
import Spinner from '../Spinner/Spinner';

const MoreInfo = ({scrollTo}) => {
    const [questionData, setQuestionData] = useState({
        name: '',
        email: '',
        question: ''
    });
    const [loading, setLoading] = useState(false);
    const [isQuestionSended, setIsQuestionSended] = useState(false);
    const InfoBlock = useRef(null);
    const QuestionBlock = useRef(null);

    useEffect(() => {
        if (scrollTo === toAboutBlock) {
            scrollToBlock(InfoBlock.current.offsetTop);
        } else if (scrollTo === toContactBlock) {
            scrollToBlock(QuestionBlock.current.offsetTop);
        }
    }, [scrollTo]);
    
    const onChangeQuestion = e => setQuestionData({...questionData, [e.target.name]: e.target.value});

    const sendQuestionHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setQuestionData({
                name: '',
                email: '',
                question: ''
            });
            setIsQuestionSended(true);
        }, 500);
    }

    return (
        <div className={classes.MoreInfo}>
            {loading && <Spinner />}
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
                        <input name='name' onChange={(e) => onChangeQuestion(e)} value={questionData.name} placeholder='Your name'/>
                        <input name='email' onChange={(e) => onChangeQuestion(e)} value={questionData.email} placeholder='Your mail'/>
                        <input name='question' onChange={(e) => onChangeQuestion(e)} value={questionData.question} placeholder='Your question'/>
                    </div>
                    {isQuestionSended && <><div style={{color: 'green', fontSize: 'small'}}>We will contact you soon!</div><br/></>}
                    <div onClick={sendQuestionHandler} className={classes.Submit}><span>Send</span></div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({scrollTo: state.navbar.scrollTo});
  
export default connect(mapStateToProps)(MoreInfo);