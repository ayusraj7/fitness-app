import { createSlice } from "@reduxjs/toolkit";

const safeParse = (key) => {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
};

const userSlice = createSlice({
  name: "User",
  initialState: {
    token: safeParse("token"),
    signupData: null,
    loading: false,
    userData: safeParse("userData"),
    error: false,
  },
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
    setUserData(state, value) {
      state.userData = value.payload;
    },
    setError(state, value) {
      state.error = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken, setUserData } =
  userSlice.actions;
export default userSlice.reducer;
