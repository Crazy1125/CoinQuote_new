import { combineReducers } from 'redux';

const initialState = {
    redux_count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, redux_count: state.redux_count + 1 };
        case 'DECREMENT':
            return { ...state, redux_count: state.redux_count - 1 };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;