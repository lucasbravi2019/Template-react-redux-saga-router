import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
}

const exampleSlice = createSlice({
    name: 'example',
    initialState: initialState,
    reducers: {
        runGetData(state) {
            return state;
        },
        setData(state, action) {      
            state.data = [...action.payload]
            console.log(state.data);
            
        }
    }
})

export const { 
    runGetData, 
    setData 
} = exampleSlice.actions;
export default exampleSlice.reducer;

