import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    users:[],
    status: "idle",
    error:null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers(builder) {
    builder
    .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.users = state.users.concat(action.payload)
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.user
      })
  }
});

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
      const response = await axios.get('/fakeDatas/users.json');
      return response.data;
    }
  );

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;

export const selectAllUsers = state => state.users