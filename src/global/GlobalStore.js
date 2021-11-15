import React, { createContext, useReducer } from 'react';
import { reducer } from './GlobalReducer';
import * as CONSTANTS from '../constants'; 

const initialState = {
    notes: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addNote = note => {
        dispatch({
            type: CONSTANTS.ADD_NOTE,
            payload: note
        });
    }

    const deleteNote = datetime => {
        dispatch({
            type: CONSTANTS.DELETE_NOTE,
            payload: datetime
        });
    }

    return (
        <GlobalContext.Provider value={{
            notes: state.notes,
            addNote,
            deleteNote
        }}>
            {children}
        </GlobalContext.Provider>
    );
}