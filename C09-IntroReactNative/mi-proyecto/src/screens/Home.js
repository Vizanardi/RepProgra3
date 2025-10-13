import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BotonSaludar from "../components/BotonSaludar";
import Contador from "../components/Contador";

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hola Mundo!</Text>
            <BotonSaludar />
            <Contador />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    text:{
        textAlign: 'center',
    }
});

export default Home;