import React, { useState } from "react";
import { TextInput, TouchableOpacity, View,Text } from "react-native";
import styles from "./RegistrationCard.style";

const RegistrationCard = ({onSave}) =>{
    const [todo, setTodo] = useState('');
    
    const handleSave = () => {
        const control = (text) =>{
            if(todo){
                const newItem = { id: Date.now(), text: todo };
                onSave(newItem);
                setTodo(text);
            }        
        }
        setTodo(control);
    }
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.text} 
                value={todo} 
                onChangeText={setTodo} 
                placeholder="Yapılacak.." 
            />
            <View style={styles.line}/>
            <TouchableOpacity 
                onPress={handleSave} 
                disabled={!todo} 
                style={[styles.btn_container, { backgroundColor: todo ? 'orange' : 'gray' }]}>
                <Text>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}
export default RegistrationCard;