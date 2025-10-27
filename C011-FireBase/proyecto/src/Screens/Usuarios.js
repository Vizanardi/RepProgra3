import { View, Text, StyleSheet, FlatList} from "react-native";
import { Component } from "react";
import { db } from "../firebase/config";

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
        }
    }
     
    componentDidMount() {
        db.collection("users").onSnapshot(docs => {
            let users = [];
            docs.forEach( doc => {
                users.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
            this.setState({ 
                usuarios: users,
            });
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Lista de usuarios registrados</Text>
                <FlatList
                    data={this.state.usuarios}
                    renderItem={({ item }) => (
                        <View style={styles.datos}>
                            <Text style={styles.datos1}>Email: {item.data.email}</Text>
                            <Text style={styles.datos2}>Username: {item.data.username}</Text>
                            <Text style={styles.datos2}>Password: {item.data.password}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
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

export default Usuarios;