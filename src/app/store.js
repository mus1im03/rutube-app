import { configureStore } from '@reduxjs/toolkit';
import surveyReducer from '../features/surveySlice' 

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
  },
});
