import { View, Text, StyleSheet, Pressable } from "react-native";
import DynamicForm from "../components/DynamicForm";

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hola Mundo!</Text>
            <DynamicForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
    }
    
});

export default Home;