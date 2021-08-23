import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions={
    Clouds: {
        iconName:"cloud",
        gradient:["#4da0b0","#d39d38"],
        title:"clouddddd",
        subtitle:"I know, fucking boring"
    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.container}>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons 
                    size = {96} 
                    color="white" 
                    name={weatherOptions[condition].iconName}/>
                    <Text style={styles.temp}>{temp}˚</Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </View>
        </LinearGradient>
    
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thenderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"
    ]). isRequired
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:36,
        color:"white"
    },
    halfContainer: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title: {
        color: "white",
        fontSize:44,
        fontWeight: "300",
        marginBottom:10,
        
    },
    subtitle: {
        color: "white",
        fontWeight:"600",
        fontSize:24,
    },
    textContainer: {
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
});