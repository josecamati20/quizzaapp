import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {useFonts} from "expo-font"
export default function CardCategory({title , icon}) {

  return (
    <View style={styles.category}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.categoryTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    category:{
        width:"100%",
        height:60,
        backgroundColor: "rgb(30, 59, 92)",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginVertical:4,
        borderRadius:5,
      
        
     
    },

    icon:{
      width:30,
      height:30,
      marginLeft:8

  },
  categoryTitle:{
    color:"white",
    fontSize:16,
    flex:1,
    marginLeft:10,
    textTransform:"capitalize",
    
    
  }
 
})