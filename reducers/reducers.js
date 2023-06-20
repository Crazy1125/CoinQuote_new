import { combineReducers } from 'redux';

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;