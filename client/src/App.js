import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import {setIsMobileAC} from './store/navbarReducer/navbarReducer';
import './App.css';
import { loginSuccess } from './store/authReducer/authReducer';

function App(props) {
  const data = JSON.parse(localStorage.getItem('token'));

  if (data && data.token && data.refresh) {
    props.login(data.token, data.refresh);
  }

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

const mapDispatchToProps = dispatch => ({
    setIsMobile: (prevWidth, curWidth) => {
      dispatch(setIsMobileAC(prevWidth, curWidth));
    },
    login: (token, refresh) => {
        dispatch(loginSuccess(token, refresh));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);