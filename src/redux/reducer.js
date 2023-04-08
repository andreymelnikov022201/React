import { combineReducers } from "redux";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, posts: [] };

export const fetchPhotos = createAsyncThunk("counter/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
const rootReducer = combineReducers({ counter: counterSlice.reducer });
export default rootReducer;
