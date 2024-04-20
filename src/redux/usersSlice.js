import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state , actions ) => {
            let copy = JSON.parse(JSON.stringify(state.value));
            copy.push(actions.payload);
            state.value = copy
        }
    }
})
export const {register} = userSlice.actions;
export default userSlice.reducer