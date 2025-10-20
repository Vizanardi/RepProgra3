import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-web";
import Card from "../../Components/Card";

class ProductsAll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: "https://rickandmortyapi.com/api/character",
    };
}

    componentDidMount() {
        fetch(this.state.api)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ productos: data.results });
            })
            .catch((error) => {
                console.error("Error", error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Lista de Productos:</Text>
                <FlatList
                    data={this.state.productos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Card producto={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 18,
        }
});

export default ProductsAll;