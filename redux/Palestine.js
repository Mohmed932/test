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

export const loadMoreDataPalestine = createAsyncThunk(
  "loadMoreDataPalestine/newsData",
  async (page, { rejectWithValue }) => {
    try {
      const req = await fetch(
        `${base_url}/category/palestine?page=${page}&limit=9`
      );
      const res = await req.json();
      return res
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const SectionPalestineNewsData = createSlice({
  name: "newsData",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadMoreDataPalestine.pending, (state) => {
        state.loading = true;
        state.newsData = [];
        state.error = false;
      })
      .addCase(loadMoreDataPalestine.fulfilled, (state, action) => {
        state.loading = false;
        state.newsData = action.payload;
        state.error = false;
      })
      .addCase(loadMoreDataPalestine.rejected, (state, action) => {
        state.loading = false;
        state.newsData = [];
        state.error = action.payload || true;
      });
  },
});

export default SectionPalestineNewsData.reducer;
