import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },
  reducers: {
    updatedUser(state, action) {
      console.log(action.payload);
      
      state.data = action.payload;
    },
  },
});

export const { updatedUser } = userSlice.actions;
export default userSlice.reducer