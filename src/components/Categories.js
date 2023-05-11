import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CardCategory from './CardCategory'
export default function Categories() {

  return (
    <ScrollView style={styles.categoriesList} showsVerticalScrollIndicator={false}>
        <CardCategory title={"geral"} icon={require("./../../assets/science.svg")} />
        <CardCategory title={"programação"}  icon={require("./../../assets/science.svg")} />
        <CardCategory title={"base de dados"}  icon={require("./../../assets/science.svg")} />
        <CardCategory title={"redes de computadores"}  icon={require("./../../assets/science.svg")} />
        <CardCategory title={"tecnologia de informação e comunicação"}  icon={require("./../../assets/science.svg")} />
        <CardCategory title={"organização de empresas"}  icon={require("./../../assets/science.svg")} />
        <CardCategory title={"informática aplicada a gestão"}  icon={require("./../../assets/science.svg")} />
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  categoriesList:{
    width:"100%",
    padding:8
  },
  
 
})