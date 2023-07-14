import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.welcome}>hello</Text>
    <image source={require('C:\Users\Student\Desktop\react\reactjs-beginner\project1\assets\download.png')} 
    style={styles.MainImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abff4f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {  
    fontSize: 50,  
    textAlign: 'center',  
    margin: 10,  
  },
  
  MainImage:{
      width:200,
      height:200,
  }
    
  
});
