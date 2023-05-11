import { StatusBar } from 'expo-status-bar';
import { Image,  SafeAreaView,  StyleSheet, Text, View } from 'react-native';
import Answers from '../components/Answers';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import data from '../utils/data';
import { TouchableOpacity } from 'react-native';
import { addCurrentQuestion, addIdSelectedAnswer, addNumberOfAnsweredQuestions, addUserAchievedPoint, changeAnswers } from '../store/answerSlice/answerSlice';
import { changeEveryThing } from '../store/answerSlice/answerSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Question({navigation}) {
  const dispatch = useDispatch()

  const {currentQuestion} = useSelector(store=> store.answer)
  const {idSelectedAnswer} = useSelector(store=> store.answer)
  const {numberOfAnsweredQuestions} = useSelector(store=> store.answer)
  const {userAchievedPoints} = useSelector(store=> store.answer)
  const [q, setQ] = useState(currentQuestion[0])
  const [n, setn] = useState(numberOfAnsweredQuestions)
  const [length, setLength] = useState(data.length)
  const [timer, setTimer] = useState(15)
  const [points,setPoints] = useState(userAchievedPoints)
  const [an,setAn] = useState(idSelectedAnswer)

  
  
  const t = ()=>{
    setTimer(prev=> prev === 0 ? 0 :  prev - 1 )
  }
  const myTimeout = setTimeout(t, 1000);



 
useEffect(()=>{

  const myFunction = async()=>{
    if(q?.idCorrectAnswer == idSelectedAnswer ){
      console.log("sao iguais")
      
      dispatch(addCurrentQuestion())
      dispatch(addNumberOfAnsweredQuestions())
      dispatch(addUserAchievedPoint())
      navigation.replace("Question")
      const userData = JSON.parse(await AsyncStorage.getItem("points"))
      AsyncStorage.setItem("points", JSON.stringify(userData + 10) )
    }
    if( n  === length){
      navigation.navigate("Win")
    }
    if(q?.idCorrectAnswer != idSelectedAnswer && idSelectedAnswer != 0){
      navigation.navigate("Lose")
    }

  }

   myFunction()
},[idSelectedAnswer])

const resetAll = ()=>{
  dispatch(changeEveryThing())
  navigation.navigate("Home")
}

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgrounmdContainer}>
        <TouchableOpacity style={styles.tinyCardCategory} onPress={()=> resetAll()}>
        <Image source={require("./../../assets/backpng.png")} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.userPointsText}>{points} pts</Text>
      </View>
     <View style={styles.wrapper}>
     <View style={styles.cardQuestion}>
      <View style={styles.cardQuestionCounter}>
        <Text style={styles.cardQuestionCounterText}>{timer}</Text>
      </View>
        <Text style={styles.cardQuestionNumber}>Questão {n}/{length}</Text>
        <Text style={styles.cardQuestionTitle}>{q?.question}?</Text>
     </View>

      <Answers answers={q?.answers} idCorrentAnswer={q?.idCorrectAnswer} />
     </View>


     

    

     {timer === 0 && <View style={styles.overlay}>
        <View style={styles.overlayModal}>
        <Image source={require("./../../assets/closepng.png")} style={styles.iconModal} />
          <Text style={styles.overlayModalText}>O tempo expirou.</Text>
          <TouchableOpacity style={styles.menuButton} onPress={()=> resetAll()}>
            <Text style={styles.menuButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
     </View>}

     
     <StatusBar style="light" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'lightgray',
    width:"100%",
    position:"relative"
  },
  backgrounmdContainer:{
    width:"100%",
    height:80,
    maxheight:60,
    backgroundColor:"rgb(30, 59, 92)",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding:"1%"
  },
  wrapper:{
    width:"100%",
    alignItems: 'center',
  },

  cardQuestion:{
    width:"80%",
    minHeight:200,
    backgroundColor:"white",
    borderRadius:5,
    marginTop:"10%",
    boxShadow:"rgba(149,157,165,0.2) 0px 8px 24px",
    alignItems:"center",
    padding:4,
  },
  cardQuestionCounter:{
    justifyContent:"center",
    textAlign:"center",
    
    fontSize:12,
    width:40,
    height:40,
    backgroundColor:"2px solid rgb(30, 59, 92)",
    borderRadius:50,
    marginTop:"-8%"
  },
  cardQuestionCounterText:{
    textAlign:"center",
    
    fontSize:14,
    color:"white",
  },
  cardQuestionNumber:{
    textAlign:"center",
    
    fontSize:12,
    color:"rgb(30, 59, 92)",
    marginTop:6
  },
  cardQuestionTitle:{
    width:"100%",
    textAlign:"center",
    
    fontSize:18,
    marginTop:"12%",
    marginBottom:"5%",

  },

  answerContainer:{
    width:"100%",
    height:"50%",
    alignItems:"center",
    marginTop:"5%",
  },
  tinyCardCategory:{
    flexDirection:"row",
    alignItems:"center",
  },
  icon:{
    width:35,
    height:35,
    marginLeft:"2%",

},
iconModal:{
  width:60,
  height:60,
},
iconModalCorrect:{
  marginTop:10,
  width:50,
  height:50,
  

},
userPointsText:{
  textAlign:"center",
  width:80,
  height:30,
  backgroundColor:"darkorange",
  color:"white",
  fontSize:16,
  borderRadius:6,
  marginRight:"2%",
},

overlay:{
  justifyContent:"center",
  alignItems:"center",
  position:"absolute",
  top:0,
  bottom:0,
  left:0,
  right:0,
  backgroundColor:"rgba(0,0,0,.5)",
  opacity:1,

},
overlayModal:{
  backgroundColor:"white",
  width:240,
  height:240,
  alignItems:"center",
  borderRadius:6

},
menuButton:{
  width:"80%",
  height:40,
  backgroundColor: "rgb(30, 59, 92)",
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
  marginVertical:4,
  borderRadius:5,
  position:"absolute",
  bottom:"10%"
},
menuButtonText:{
    textAlign:"center",
    
    fontSize:18,
    color:"white"
},
overlayModalText:{
    textAlign:"center",
    fontSize:18,
    marginTop:"20%"
}

  
});
