
export const TOGGLE_TLDR = 'TOGGLE TLDR';
export const SET_PAGE = 'SET PAGE';

export const toggleTLDR = () => ({
    type: TOGGLE_TLDR
});

export const setPage = (page) => ({
    type: SET_PAGE,
    page
});
