import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {useFonts} from "expo-font"
export default function CardUserPoint() {


  return (
    <View style={styles.cardUserPoint}>
    <View style={styles.category}>
        <Text style={styles.pointTitle}>pontos acumulados</Text>
        <Text style={styles.pointValue}>200pts</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardUserPoint:{
    width:"100%",
    padding:8,
    marginTop:8,
  },
    category:{
        width:"100%",
        height:80,
        backgroundColor: "orange",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:5,
     
    },

  
  pointTitle:{
    width:"100%",
    color:"white",
    fontSize:18,
    fontWeight:500,
    textTransform:"uppercase",   
    marginTop:8,
    marginLeft:20,
    
  },
  pointValue:{
    width:"100%",
    color:"white",
    textAlign:"center",
    fontSize:16,
    fontWeight:500,  
    marginBottom:"10%",
    
  }
 
})