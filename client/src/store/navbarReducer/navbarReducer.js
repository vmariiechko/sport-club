const SET_IS_MOBILE = 'SET_IS_MOBILE';
const SET_SCROLL_TO = 'SET_SCROLL_TO';
export const toAboutBlock = 'toAboutBlock';
export const toContactBlock = 'toContactBlock';
export const toTrainersBlock = 'toTrainersBlock';
export const toServicesBlock = 'toServicesBlock';
export const toNewsBlock = 'toNewsBlock';

let initialState = {
    isMobile: null,
    scrollTo: ''
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_MOBILE:
            return {
                ...state,
                isMobile: action.isMobile
            };
        case SET_SCROLL_TO:
            return {
                ...state,
                scrollTo: action.scrollTo
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

export const setScrollToAC = (scrollTo) => {
    return dispatch => {
        dispatch(setScrollTo(scrollTo));
        setTimeout(() => {
            dispatch(setScrollTo(null));
        }, 500);
    }
}

const setIsMobile = (isMobile) => ({type: SET_IS_MOBILE, isMobile});
const setScrollTo = (scrollTo) => ({type: SET_SCROLL_TO, scrollTo});

export default navbarReducer;