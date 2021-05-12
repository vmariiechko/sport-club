import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import {setIsMobileAC} from './store/navbarReducer/navbarReducer';
import './App.css';

function App(props) {
  useEffect(() => {
    props.setIsMobile(props.isMobile, window.innerWidth);
    window.addEventListener('resize', () => props.setIsMobile(props.isMobile, window.innerWidth));
  }, []);

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isMobile: state.navbar.isMobile
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setIsMobile: (prevWidth, curWidth) => {
      dispatch(setIsMobileAC(prevWidth, curWidth));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
