import * as ActionTypes from "./actionsTypes";


const initialState = {
    events: [],
    counter: 1
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.DECREMENT:
            let decrementedValue = state.counter - 1
            return {
                ...state,
                counter: decrementedValue
            }
        case ActionTypes.INCREMENT:
            let incrementedValue = state.counter + 1
            return {
                ...state,
                counter: incrementedValue
            }

        default:
            return state
    }
}

export default counterReducer;