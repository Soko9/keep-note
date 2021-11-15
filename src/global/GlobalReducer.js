import * as CONSTANTS from '../constants';

export const reducer = (state, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_NOTE:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case CONSTANTS.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => {
                    return note.datetime !== action.payload;
                })
            }
        default:
            return state;
    }
}