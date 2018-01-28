import { PAGES } from '../common/constants';
import { SET_PAGE, TOGGLE_TLDR } from './actions';

export const initialState = {
    tldr: false,
    page: PAGES.INTRO,
    lastPage: undefined
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TLDR:
            return { ...state, tldr: !state.tldr };
        case SET_PAGE:
            return { ...state, page: action.page, lastPage: state.page };
        default:
            return state;
    }
};

export default reducer;
