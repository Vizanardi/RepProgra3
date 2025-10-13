import React, { Component } from "react";
import { Pressable } from "react-native";
import { Text, StyleSheet} from "react-native";

class BotonSaludar extends Component {
    saludar() {
            console.log('me clickearon!');
        }
    render() {
        return (
            <Pressable style={styles.boton} onPress={() => this.saludar()}>
                <Text style={styles.text}>Clickeame</Text>
            </Pressable>
        );
    }
}

const styles = StyleSheet.create({
    boton: {
        padding: 4,
        backgroundColor: '#ccc',
        marginBottom: 10,
        borderRadius: 4,
    },
    text:{
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    }
});

export default BotonSaludar;