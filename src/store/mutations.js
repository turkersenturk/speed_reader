import { state } from "./state";

export const mutations = {
    increment(state, limit){
        if(state.counter < limit){
            setTimeout(() => {
                state.counter++;
            }, 500);
        }
    },
    reset(state){
        state.counter = 0;
        state.textInputPieces= [];
    },
    start(state, textInputPieces){
        state.textInputPieces = textInputPieces
    }
}