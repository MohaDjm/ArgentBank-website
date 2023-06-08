import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginInfos: null,
  token: null,
  userProfile: {
    firstName: "", 
    lastName: "", 
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginInfos: (state, action) => {
      state.loginInfos = action.payload;
    },
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
    setUserFirstName: (state, action) => {
      state.userProfile.firstName = action.payload;
    },
    setUserLastName: (state, action) => {
      state.userProfile.lastName = action.payload;
    },
    setLogout: (state) => {
      return initialState;
    },
  },
});


export const {
  setLoginInfos,
  setUserToken,
  setUserFirstName,
  setUserLastName,
  setLogout,
} = userSlice.actions;

export default userSlice;
