import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  answers: [],
  ratings: []
};

export const fetchQuestions = createAsyncThunk(
  "fetch/question",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4050/question");

      const question = await res.json();

      if (question.error) {
        return thunkAPI.rejectWithValue(question.error);
      }

      return thunkAPI.fulfillWithValue(question);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAnswers = createAsyncThunk(
  "fetch/answer",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4050/answer");

      const answer = await res.json();

      if (answer.error) {
        return thunkAPI.rejectWithValue(answer.error);
      }

      return thunkAPI.fulfillWithValue(answer);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRatings = createAsyncThunk(
  "fetch/rating",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4050/rating");

      const rating = await res.json();

      if (rating.error) {
        return thunkAPI.rejectWithValue(rating.error);
      }

      return thunkAPI.fulfillWithValue(rating);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
    builder.addCase(fetchAnswers.fulfilled, (state, action) => {
      state.answers = action.payload;
    });
    builder.addCase(fetchRatings.fulfilled, (state, action) => {
      state.ratings = action.payload;
    });
  },
});

export default surveySlice.reducer;
