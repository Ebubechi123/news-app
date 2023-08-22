import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "@env";

import axios from "axios";
import { CONSTANTS } from "../../constants/constants";

export const getNews =createAsyncThunk(
    "News/fetchEverything",
    async (_,{rejectWithValue}) => {
      try {
        const response = await axios.get(CONSTANTS.url + `everything?domains=techcrunch.com&apiKey=${API_KEY}`); 
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

const News_Slice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
        state.isError = false;
        state.isSuccessful = false;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isSuccessful = true;
        state.data = payload;
      })
      .addCase(getNews.rejected, (state, { payload }) => {
        state.loading = false;
        state.isError = false;
        state.error = payload;
      });
  },
});

export default News_Slice.reducer;
