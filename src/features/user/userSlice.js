import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    // TODO remove
    id: 1,
    name: "Joe Bloggs",
    jobTitle: "Rents and Arrears",
  },
});

const selectUser = (state) => state.user;
export { selectUser, userSlice };
export default userSlice.reducer;
