import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    _id: "6399aba31a75813b4ccc2e1e",
    name: "mathieu",
    admin: true,
    __v: 0
};

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
    }
});

export const {} = currentUserSlice.actions;

export default currentUserSlice.reducer;