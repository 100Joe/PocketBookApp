import { StyleSheet, View, Text } from 'react-native';
import Main from './Components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to PocketBook! 📖</Text>

      <Main />
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
  text: {
    marginTop: 150
  }
});
