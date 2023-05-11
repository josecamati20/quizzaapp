import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View,SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/answerSlice/modalSlice';

import {useFonts} from "expo-font"
export default function About({navigation}) {
  const dispatch = useDispatch()

  const returnFunction = ()=>{
    dispatch(closeModal())
    navigation.navigate("Home")

  }
    
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.aboutHeader}> 
       
       
        <TouchableOpacity onPress={()=> returnFunction()}>
          <Image source={require("./../../assets/closepngblack.png")} style={styles.aboutHeaderBtn} />
        </TouchableOpacity>
       
        </View>
        <View style={styles.mainView}>
          <Image source={require("./../../assets/nurse.png")} style={styles.mainLogo} />
          <Text style={styles.titleText}>Quizza v1.0</Text>
          <Text style={styles.aboutText}>App de perguntas e respostas destinada a área da saúde.</Text>
          <Text style={styles.aboutText}>App desenvolvido por José António Camati.</Text>
        </View>
        <StatusBar style="light" backgroundColor='rgb(30, 59, 92)' />

     </SafeAreaView>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white",
    width:"100%",
    alignItems:"center",
    position:"relative"
  },
 
  aboutHeader:{
    width:"100%",
    alignItems:"flex-end",
    paddingVertical:6,
    padding:10,
    marginVertical:30
  },
  aboutHeaderBtn:{
    width:40,
    height:40,
    marginLeft:8
  
  },
  mainView:{
    padding:10
  },
  mainLogo:{
    width:40,
    height:40,
  
  },
  titleText:{
  
    
    fontSize:18,
    fontWeight:"bold"
  },
  aboutText:{
  
    
    fontSize:16,
  },
  
  

});
