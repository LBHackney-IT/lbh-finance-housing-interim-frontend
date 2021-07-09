import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserInfo = createAsyncThunk('GET_USER_INFO', async () => {
  const { data } = await axios.get('https://auth.hackney.gov.uk/auth/check_token', { withCredentials: true });
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [getUserInfo.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Actions
export const { logout } = userSlice.actions;

// Selectors
const selectUser = (state) => state.user.user;
export { selectUser, userSlice };

// Reducer
export default userSlice.reducer;
