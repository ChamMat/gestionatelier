import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    chanels:[],
    status: "idle",
    error:null,
};

const channelsSlice = createSlice({
  name: 'chanels',
  initialState,
  reducers: {
    setChannels(state, action) {
      state.channels = action.payload;
    },
  },
  extraReducers(builder) {
    builder
    .addCase(fetchChannels.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchChannels.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.chanels = state.chanels.concat(action.payload)
      })
      .addCase(fetchChannels.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export const fetchChannels = createAsyncThunk(
    'chanels/fetchChannels',
    async () => {
      const response = await axios.get('http://192.168.1.16:3001/communication/chanels');
      return response.data;
    }
  );

export const { setChannels } = channelsSlice.actions;

export default channelsSlice.reducer;