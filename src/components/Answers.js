
import React from 'react'
import  CardAnswer  from './CardAnswer'
import { ScrollView, StyleSheet } from 'react-native'
import {useFonts} from "expo-font"
export default function Answers({answers}) {



  return (
    <ScrollView style={styles.answerList} contentContainerStyle={{flexGrow:1 ,alignItems:"center"}} showsVerticalScrollIndicator={false}>
     {answers?.map(answer => <CardAnswer id={answer.id}position={answer.position} text={answer.a} key={answer.id} />)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  answerList:{
    width:"100%",
    marginTop:"5%"
  },
  
 
})