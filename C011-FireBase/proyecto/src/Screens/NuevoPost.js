import { View, Text, StyleSheet, FlatList} from "react-native";
import { Component } from "react";
import { db } from "../firebase/config";

class NuevoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
        }
    }
     
    subirPost() {
        db.collection("posts").add({
            owner: auth.currentUser.email,
            email: this.state.email,
            username: this.state.username,
            createdAt: Date.now(), 
        })
            .then( res => console.log(res) )
            .catch( error => console.log(error) );
        }

    render() {
        return (
             <View style={styles.container}>
                            <Text style={styles.text}>Registro</Text>
                            <TextInput keyboardType="email-address" placeholder="Email" onChangeText={text => this.setState({email: text})} style={styles.text2} />
                            <TextInput keyboardType="default" placeholder="Username" onChangeText={text => this.setState({username: text})} style={styles.text2} />
                            <TextInput keyboardType="default" secureTextEntry={true} placeholder="Password" onChangeText={text => this.setState({password: text})} style={styles.text2} />
                            <Pressable onPress={() => this.register(this.state.email, this.state.username, this.state.password)}>
                                <Text style={styles.text1}>Registrate</Text>
                            </Pressable>
            
                            <View style={styles.datos}>
                                <Text style={styles.datos1}>Datos ya registrados:</Text>
                                <Text style={styles.datos2}>Email: {this.state.email}</Text>
                                <Text style={styles.datos2}>Username: {this.state.username}</Text>
                                <Text style={styles.datos2}>Password: {this.state.password}</Text>
                            </View>
            </View>
        );
    }
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
        textAlign: 'left',
        marginBottom: 10,
    },    
    text1:{
        backgroundColor: 'lightgreen', 
        paddingHorizontal: 10,      
        paddingVertical: 6,         
        borderRadius: 4,            
        borderWidth: 1,             
        borderStyle: 'solid',       
        borderColor: 'lightgreen',     
        alignItems: 'center',  
        textAlign: 'center',     
        marginTop: 10,
        width: 250,
    },
    text2:{
        paddingVertical: 15,      
        paddingHorizontal: 10,    
        borderWidth: 1,           
        borderColor: '#ccc',      
        borderStyle: 'solid',     
        borderRadius: 6,          
        marginVertical: 10,
        width: 250,
    },
    datos:{
        backgroundColor: '#ecebebff', 
        paddingHorizontal: 10,      
        paddingVertical: 6,         
        borderRadius: 4,            
        borderWidth: 1,             
        borderStyle: 'solid',       
        borderColor: '#ecebebff',         
        marginTop: 10,
    },
    datos1:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    datos2:{
        fontSize: 14,
    },
});

export default NuevoPost;