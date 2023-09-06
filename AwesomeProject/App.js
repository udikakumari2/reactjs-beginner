import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>  
        <Text style={styles.welcome}>Welcome to React Native!</Text>  
        <Text style={styles.instructions}>To get started, edit App.js</Text>  
        <Text style={styles.instructions}>{instructions}</Text>  
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
