import { configureStore } from '@reduxjs/toolkit';
import answerReducer from './answerSlice/answerSlice';
import modalReducer from './answerSlice/modalSlice';

export const store = configureStore({
  reducer: {
    answer: answerReducer,
    modal:modalReducer
  }
});