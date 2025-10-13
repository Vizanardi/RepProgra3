import { StyleSheet, Text, View } from 'react-native';
import ProductsAll from './screens/ProductsAll';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsAll  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
