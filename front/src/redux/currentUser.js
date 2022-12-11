import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: "mathieu",
    id: 1,
    admin: true,
};

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
    }
});

export const {} = currentUserSlice.actions;

export default currentUserSlice.reducer;