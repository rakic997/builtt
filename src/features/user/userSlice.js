import { createSlice } from '@reduxjs/toolkit';

const defaultUser = {
  id: 1,
  username: 'admin',
  password: 'admin'
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export const selectUser = (state) => state.user;

export const selectDefaultUser = () => defaultUser; 

export default userSlice.reducer;