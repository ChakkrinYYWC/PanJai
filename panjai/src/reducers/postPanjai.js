import { ACTION_TYPES } from '../action/postPanjai'
const initialState = {
    list: []
}
export const postPanjai = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        default:
            return state;
    }
}