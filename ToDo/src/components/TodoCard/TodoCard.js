import React, { useState } from "react";
import { View,Text, TouchableOpacity } from "react-native";
import styles from "./TodoCard.style";

const TodoCard = ({todo}) =>{
    const [card,setCard]= useState()
    
    return(
        <TouchableOpacity onPress={setCard}  style={[styles.container, { backgroundColor: card ? 'gray' : 'green'}]}>
            <Text style={ {textDecorationLine: card ? 'line-through' : null} }>{todo}</Text>
            
        </TouchableOpacity>
    )
}
export default TodoCard;