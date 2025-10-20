import { View, Text, StyleSheet, Image } from "react-native";


function Card({ producto }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{producto.title}</Text>
            <Text style={styles.text}>{producto.price}</Text>
            <Text style={styles.text}>{producto.description}</Text>
            <Text style={styles.text}>{producto.category}</Text>
            <Image source={{ uri: producto.image }} style={styles.image} />
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
    }, 
    image: {
        width: 100,
        height: 100,
    },
});

export default Card;