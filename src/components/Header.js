import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../store/answerSlice/modalSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Header() {

  const dispatch = useDispatch()
  
const [local, setLocal] = useState(10)
    
const getUser = async () => {
  try {
    const userData = JSON.parse(await AsyncStorage.getItem("points"))
    setLocal(userData)
  } catch (error) {
   console.log(error); 
  }
};



useEffect(()=>{
  getUser()
},[])


  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.logoContainer} onPress={()=> dispatch(openModal())}>
        <Image source={require("./../../assets/menupng.png")} style={styles.logo} />
     </TouchableOpacity>
   
      <Text style={styles.userPointsText}>{local} pts</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:90,
        backgroundColor: "rgb(30, 59, 92)",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:4,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
       
        
    },
    logoContainer:{
    
       
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center"
    },
    logo:{
        width:30,
        height:30,
        marginLeft:8

    },
    titleContainer:{
    
       display:"flex",
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",
    },
    title:{
        width:"100%",
        color:"white",
        textAlign:"center",
        fontSize:22,
        marginRight:"10%",
        
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
      }
      
})