import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTenancy } from "../../../api/Api";

const getTenantAsync = createAsyncThunk(
  "individualLookup/search",
  async (tenancyAgreementRef, rentAccount, householdRef) => {
    return await getTenancy(tenancyAgreementRef, rentAccount, householdRef);
  }
);

const individualLookupSearchSlice = createSlice({
  name: "individualLookupTenants",
  initialState: {
    value: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getTenantAsync.fulfilled, (state, action) => {
      if (state.value === null) {
        // Create array
        state.value = [action.payload];
      } else if (
        state.value.find(
          (item) =>
            item.tenancyAgreementRef === action.payload.tenancyAgreementRef
        )
      ) {
        // Remap
        state.value = state.value.map((item) =>
          item.tenancyAgreementRef === action.payload.tenancyAgreementRef
            ? action.payload
            : item
        );
      } else {
        // Push to array
        state.value.push(action.payload);
      }
    });
  },
});

const selectIndividualLookupTenants = (state) => {
  return state.individualLookupTenants.value;
};

export { getTenantAsync };
export { selectIndividualLookupTenants, individualLookupSearchSlice };
export default individualLookupSearchSlice.reducer;
