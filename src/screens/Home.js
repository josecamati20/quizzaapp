import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View , SafeAreaView} from 'react-native';
import Header from  "../components/Header"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCurrentQuestion, changeAnswers } from '../store/answerSlice/answerSlice';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { closeModal } from '../store/answerSlice/modalSlice';
import {useFonts} from "expo-font"

export default function Home({navigation}) {

const dispatch = useDispatch()

const {modal} = useSelector(store => store.modal)


 const goTo = ()=>{
   dispatch(addCurrentQuestion())
  navigation.navigate("Question")
 }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.logoContainer}>
      <Image source={require("./../../assets/nurse.png")} style={styles.iconLogo} />
        <Text style={styles.logoContainerText}>Quizza app</Text>
       
      </View>
      <TouchableOpacity style={styles.category} onPress={()=>goTo()}>
        <Image source={require("./../../assets/playpng.png")} style={styles.icon} />
        <Text style={styles.categoryTitle}>jogar</Text>
     </TouchableOpacity>
      <StatusBar style="auto" />

      {modal && <SafeAreaView style={styles.overlay}>
        <View style={styles.Modal}>
        <View style={styles.modalHeader}> 
        <View style={styles.modalSubHeader}>
          <Image source={require("./../../assets/nurse.png")} style={styles.modalIconLogo} />
          <Text style={styles.modalSubHeaderText}>Quizza</Text>
        </View>
       
        <TouchableOpacity onPress={()=> dispatch(closeModal())}>
          <Image source={require("./../../assets/closepngblack.png")} style={styles.modalIconRemove} />
        </TouchableOpacity>
       
        </View>
        <View style={styles.modalOptions}>
        <TouchableOpacity style={styles.modalOption} onPress={()=> navigation.navigate("About")}>
          <Image source={require("./../../assets/aboutpng.png")} style={styles.modalOptionLogo} />
          <Text style={styles.modalOptionText}>Sobre</Text>
        </TouchableOpacity>
        </View>
        </View>
     </SafeAreaView>}
     <StatusBar style="light" backgroundColor='rgb(30, 59, 92)' />

    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: "rgb(30, 59, 92)",
    backgroundColor: '#fff',
    alignItems: 'center',
    position:"relative"
  },

  category:{
    width:"90%",
    height:60,
    backgroundColor: "rgb(30, 59, 92)",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginVertical:4,
    borderRadius:5,
    position:"absolute",
    bottom:"1%"
  
    
},

icon:{
  width:30,
  height:30,
  marginLeft:8

},

iconLogo:{
  width:100,
  height:100,
  marginLeft:8

},
categoryTitle:{
color:"white",
fontSize:16,
marginLeft:10,
textTransform:"uppercase",


},


logoContainer:{
  marginTop:"40%",
  width:"100%",
  alignItems:"center",
  justifyContent:"center",
},
logoContainerText:{
  
  fontSize:24,
  fontWeight:700
},
logoContainerSmallText:{
  
  fontSize:16,
},

overlay:{
  justifyContent:"center",
  position:"absolute",
  top:0,
  bottom:0,
  left:0,
  right:0,
  backgroundColor:"rgba(0,0,0,.5)",
  opacity:1,
  


},
Modal:{
  backgroundColor:"white",
  width:"70%",
  height:"100%",
  alignItems:"center",
  justifyContent:"space-between"

},
modalHeader:{
  width:"100%",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  paddingVertical:6,
  marginTop:50
},
modalIconRemove:{
  width:35,
  height:35,
  marginRight:8

},
modalIconLogo:{
  width:40,
  height:40,
  marginLeft:8

},
modalSubHeader:{
  width:"80%",
  flexDirection:"row",
  alignItems:"center",
},
modalSubHeaderText:{
  
  fontSize:22,
  fontWeight:700
},
modalOptions:{
  marginBottom:25,
  marginLeft:10,
  width:"100%",
},
modalOption:{
  width:"100%",
  flexDirection:"row",
  alignItems:"center",
  marginLeft:5
},
modalOptionLogo:{
  width:25,
  height:25,

},
modalOptionText:{
  
  fontSize:18,
  marginLeft:5
},
  
});
