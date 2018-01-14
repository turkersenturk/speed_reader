

export const actions = {
    increment: ({commit}, limit) => {
        commit('increment', limit);
    },
    reset: ({commit}) => {
        commit('reset');
    },
    start: ({commit}, textInputPieces) => {
        commit('start', textInputPieces);
    }
}