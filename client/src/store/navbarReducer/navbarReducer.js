let initialState = {
    isMobile: null
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_MOBILE':
            return {
                isMobile: action.isMobile
            };
        default:
            return state;
    }
}

export const setIsMobileAC = (prevWidth, curWidth) => {
    return dispatch => {
        if (prevWidth === false) {
            if (curWidth <= 500) {
                dispatch(setIsMobile(true));
            }
        } else if (prevWidth === true) {
            if (curWidth > 500) {
                dispatch(setIsMobile(false));
            }
        } else {
            if (curWidth <= 500) {
                dispatch(setIsMobile(true));
            } else {
                dispatch(setIsMobile(false));
            }
        }        
    }
}

const setIsMobile = (isMobile) => ({type: 'SET_IS_MOBILE', isMobile});

export default navbarReducer;