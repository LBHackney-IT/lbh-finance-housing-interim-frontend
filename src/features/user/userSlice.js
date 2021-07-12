import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

// Actions
export const { setUser } = userSlice.actions;

// Selectors
const selectUser = (state) => state.user;
export { selectUser, userSlice };

// Reducer
export default userSlice.reducer;
