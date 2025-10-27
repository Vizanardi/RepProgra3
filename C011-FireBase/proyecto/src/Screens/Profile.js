import { View, Text, StyleSheet, Pressable } from "react-native";

function Profile(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mi Perfil</Text>
            <Pressable onPress={() => props.navigation.navigate("Login")}>
                <Text style={styles.text1}>Desloguearse</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    text1:{
        backgroundColor: 'lightgreen',
        borderRadius: 3,
        textAlign: 'center',
        padding: 5,
        marginTop: 10,
    }
});

export default Profile;