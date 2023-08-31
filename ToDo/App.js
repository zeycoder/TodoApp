import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TotalShowCard from './src/components/TotalShowCard/TotalShowCard';
import RegistrationCard from './src/components/registrationCard/RegistrationCard';
import TodoCard from './src/components/TodoCard/TodoCard';



export default function App() {

  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);
  
  const handleSaveItem = (newItem) => {
    setData((prevData) => [...prevData, newItem]);
    setNumber(number+1);
  }

  return (
    <View style={styles.container}>
      <TotalShowCard number={number}  />
      <FlatList data={data} renderItem={({item}) =>
        <TodoCard todo={item.text} />
      }  
      />
      <RegistrationCard onSave={handleSaveItem}  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
