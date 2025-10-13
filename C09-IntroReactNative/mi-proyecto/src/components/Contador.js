import React, { Component } from "react";
import { Pressable } from "react-native";
import { Text, StyleSheet} from "react-native";
import { View } from "react-native-web";

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 0
        };
    }

    contador() {
        this.setState({ n: this.state.n + 1 });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text1}>Cantidad de clicks: {this.state.n}</Text>
                <Pressable style={styles.boton} onPress={() => this.contador()}>
                    <Text style={styles.text}>Click aqui para contar</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 5,
    },
    boton: {
        padding: 7,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        marginBottom: 10,
        borderRadius: 4,
    },
    text1:{
        textAlign: 'center',
        color: 'black',
    },
    text:{
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    }
});

export default Contador;