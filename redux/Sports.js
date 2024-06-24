import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";

    
const initialState = {
  loading: false,
  newsData: [],
  error: false,
};

export const loadMoreDataSports = createAsyncThunk(
  "loadMoreDataSports/newsData",
  async (page, { rejectWithValue }) => {
    try {
      const req = await fetch(
        `${base_url}/category/sports?page=${page}&limit=9`
      );
      const res = await req.json();
      return res
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const SectionSportsNewsData = createSlice({
  name: "newsData",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadMoreDataSports.pending, (state) => {
        state.loading = true;
        state.newsData = [];
        state.error = false;
      })
      .addCase(loadMoreDataSports.fulfilled, (state, action) => {
        state.loading = false;
        state.newsData = action.payload;
        state.error = false;
      })
      .addCase(loadMoreDataSports.rejected, (state, action) => {
        state.loading = false;
        state.newsData = [];
        state.error = action.payload || true;
      });
  },
});

export default SectionSportsNewsData.reducer;
