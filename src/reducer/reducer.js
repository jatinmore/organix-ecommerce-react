const RATING = "RATING";
const LOW_TO_HIGH = "LOW_TO_HIGH"
const HIGH_TO_LOW = "HIGH_TO_LOW"
export const ReducerFunc = (state, action) => {

    switch (action.type) {
        case RATING:
            return {...state, rating: action.payload };

        case LOW_TO_HIGH:
            return {...state, Sort: action.type };


        case HIGH_TO_LOW:
            return {...state, Sort: action.type };
        default:
            return state;
    }
}