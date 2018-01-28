import { PAGES } from '../common/constants';
import { TOGGLE_TLDR } from './actions';

export const initialState = {
    tldr: false,
    page: PAGES.INTRO
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TLDR:
            return { ...state, tldr: !state.tldr };
        default:
            return state;
    }
};

export default reducer;
