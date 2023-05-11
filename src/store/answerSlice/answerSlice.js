import { createSlice } from "@reduxjs/toolkit"
import data from "../../utils/data"
const answerSlice = createSlice({
  name: "question",
  initialState: {
    questions:data,
    currentQuestion: null,
    idSelectedAnswer: 0,
    numberOfAnsweredQuestions:0,
    userAchievedPoints:0
  },
  reducers: {
    addCurrentQuestion:(state,action)=>{

     
      const randomNumber =  Math.floor(Math.random() * state.questions.length);
      state.currentQuestion = state.questions.filter(item => item.id == state.questions[randomNumber].id)
      state.questions = state.questions.filter(item => item.id != state.questions[randomNumber].id)
      state.idSelectedAnswer = 0
  
    },
    addNumberOfAnsweredQuestions:(state,action)=>{
      state.numberOfAnsweredQuestions = state.numberOfAnsweredQuestions + 1
    },
    addUserAchievedPoint:(state,action)=>{
      state.userAchievedPoints = state.userAchievedPoints + 10
    },
    addIdSelectedAnswer:(state,action)=>{
      state.idSelectedAnswer = action.payload;
    },
    changeEveryThing:(state,action)=>{
      state.questions = data,
      state.currentQuestion = [],
      state.idSelectedAnswer=  0,
      state.numberOfAnsweredQuestions =0,
      state.userAchievedPoints =0
    }
    
    
    
  }
})

export default answerSlice.reducer
export const {addUserAchievedPoint ,changeEveryThing,addCurrentQuestion, addNumberOfAnsweredQuestions, addIdSelectedAnswer} = answerSlice.actions