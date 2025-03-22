import { createSlice } from "@reduxjs/toolkit";

// Get user from localStorage if exists
const storedUser = JSON.parse(localStorage.getItem("user")) || null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: storedUser,
  },
  reducers: {
    register: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
