import React from "react";
import { View, Text } from "react-native";
import styles from "./TotalShowCard.style";

const TotalShowCard = ({number}) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yapılacaklar </Text>
            <Text style={styles.number}>{number}</Text>
        </View>
    )
}
export default TotalShowCard;