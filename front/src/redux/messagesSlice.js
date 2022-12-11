import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    messages:[],
    status: "idle",
    error:null,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages(state, action) {
      const message = action.payload;
      state.messages = state.messages.concat(message);
      // state.messages.messages = action.payload;
    },
  },
  extraReducers(builder) {
    builder
    .addCase(fetchMessages.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.messages = state.messages.concat(action.payload)
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export const fetchMessages = createAsyncThunk(
    'messages/fetchMessages',
    async () => {
      const response = await axios.get('/fakeDatas/messages.json');
      return response.data;
    }
  );

export const { setMessages } = messagesSlice.actions;

export default messagesSlice.reducer;

export const selectAllMessages = state => state.messages