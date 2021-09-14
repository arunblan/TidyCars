import { LOGIN } from "../Actions/types";

const initialState = {
    count: 0,
    token: null

}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            }


        default:
            return state
    }
};
