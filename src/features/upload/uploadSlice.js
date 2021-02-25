import { createSlice } from "@reduxjs/toolkit";

const uploadsSlice = createSlice({
  name: "uploads",
  initialState: [
    // TODO remove
    { id: 1, title: "Major Works Delta", statusId: 1, information: "" },
    {
      id: 2,
      title: "Garages Delta",
      statusId: 2,
      information:
        "There was a problem with the data. See rows 3, 8, 109." +
        " Additional text, lorem ipsum dorem decorum et al.",
    },
    { id: 3, title: "Civica Pay Cash File", statusId: 3, information: "" },
  ],
});

const selectUploads = (state) => state.uploads;
export { selectUploads, uploadsSlice };
export default uploadsSlice.reducer;
