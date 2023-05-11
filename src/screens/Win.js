import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeEveryThing } from '../store/answerSlice/answerSlice';

import {useFonts} from "expo-font"

export default function Win({navigation}) {

 const dispatch = useDispatch()
  const resetAll = ()=>{
    dispatch(changeEveryThing())
    navigation.navigate("Home")
  }
  
    
 
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.overlayModal}>
        <Image source={require("./../../assets/checkpng.png")} style={styles.iconModal} />
          <Text style={styles.overlayModalText}>Parabens voce acertou todas as questoes.</Text>
          <TouchableOpacity style={styles.menuButton} onPress={()=> resetAll()}>
            <Text style={styles.menuButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="light" />

     </SafeAreaView>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"rgba(0,0,0,.5)",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
  },

  overlay:{
    flex:1,
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
    justifyContent:"space-around",
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
  },
  menuButtonText:{
      textAlign:"center",
      
      fontSize:18,
      color:"white",
      
  },
  overlayModalText:{
      textAlign:"center",
      
      fontSize:16,
      marginTop:"5%"
  }
  ,
iconModal:{
  width:50,
  height:50,
  

},
  

});
