import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "@env";

import axios from "axios";
import { CONSTANTS } from "../../constants/constants";

export const getLatestNews =createAsyncThunk(
    "latestNews/fetchNews",
    async (_,{rejectWithValue}) => {
      try {
        const response = await axios.get(CONSTANTS.url + `top-headlines?country=ng&apiKey=${API_KEY}`); 
        return response.data.articles;
      } catch (error) {
        return rejectWithValue(error)
      }
    }
  );

interface latestNewsState {
  loading: boolean;
  isError: boolean;
  isSuccessful: boolean;
  data: [];
  error: any | null;
}
const initialState = {
  loading: false,
  isError: false,
  isSuccessful: false,
  data: [],
  error: null,
} as latestNewsState;

const latestNews_Slice = createSlice({
  name: "latest_news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLatestNews.pending, (state) => {
        state.loading = true;
        state.isError = false;
        state.isSuccessful = false;
      })
      .addCase(getLatestNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isSuccessful = true;
        state.data = payload;
      })
      .addCase(getLatestNews.rejected, (state, { payload }) => {
        state.loading = false;
        state.isError = false;
        state.error = payload;
      });
  },
});

export default latestNews_Slice.reducer;
