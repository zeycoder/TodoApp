import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#555',
        margin:10,
        borderRadius:10,
        height:120,
    },
    line:{
    borderBottomColor: '#888',
    borderBottomWidth: 1,
    width:'95%',
    alignSelf:'center',

    },
    btn_container:{
        height:40,
        width:'90%',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'orange',
        margin:15
    },
    text:{
        margin:10
    }
})
export default styles;