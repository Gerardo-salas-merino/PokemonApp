import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: 'trainerName',
    initialState: {
        name: "",
    },
    //el reducers hace el paso a paso para modificar el estado global
    reducers: {
        setTrainerName: (state, action) => {
           const newTrainerName = action.payload;
           state.name = newTrainerName;
            
           //debemos retornar el nuevo valor del estado inicial
            
                
           
        },
    },
});

export const { setTrainerName }  = trainerNameSlice.actions;

export default trainerNameSlice.reducer