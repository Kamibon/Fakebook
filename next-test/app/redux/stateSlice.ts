import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { url, User, Post, Photo } from "../constants/constants";

interface initialState {
  users: User[];
  posts: Post[];
  photos: Photo[];
}

const initialState: initialState = {
  users: [],
  posts: [],
  photos: [],
};

export type Social = {
  social: {
    users: User[];
    posts: Post[];
    photos: Photo[];
  };
};

export const getPosts = createAsyncThunk("posts", async () => {
  const res = await fetch(url + "posts", { next: { revalidate: 1000 } });
  const data = await res.json();

  return data;
});

export const getUsers = createAsyncThunk("users", async () => {
  const res = await fetch(url + "users");
  const data = await res.json();
  return data;
});

export const getPhoto = createAsyncThunk("photo", async () => {
  const res = await fetch(url + "photos");
  const data = await res.json();
  return data;
});

export const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {
    showPosts: (state) => {},
    decrement: (state) => {},
    incrementByAmount: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getPhoto.fulfilled, (state, action) => {
        state.photos = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { showPosts, decrement, incrementByAmount } = socialSlice.actions;

export default socialSlice.reducer;
