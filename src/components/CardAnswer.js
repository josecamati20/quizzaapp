import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useFonts} from "expo-font"
import { addIdSelectedAnswer } from '../store/answerSlice/answerSlice'
import { useDispatch } from 'react-redux'
export default function CardAnswer({id,position , text}) {


  
const dispatch = useDispatch()
  return (
    <TouchableOpacity style={styles.cardAnswer} onPress={()=> dispatch(addIdSelectedAnswer(id))}>
    <Text style={styles.positionText}>{position}.</Text>
    <Text style={styles.answerText}>{text}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardAnswer:{
    width:"80%",
    minHeight:50,
    boxShadow:"rgba(149,157,165,0.2) 0px 8px 24px",
    backgroundColor:"white",
    borderRadius:5,
    marginVertical:4,
    flexDirection:"row",
    alignItems:"center",
    padding:4,
  },
  positionText:{
    
    fontSize:18,
    fontWeight:"bold",
    textTransform:"uppercase",
    marginRight:8,
  },
  answerText:{
    
    fontSize:16,
    fontWeight:100,
  },
 
})