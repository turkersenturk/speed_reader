import { state } from "./state";


export const getters = {
    counter: state => {
        return state.counter;
    },
    textInputPieces: state => {
        return state.textInputPieces;
    }
};