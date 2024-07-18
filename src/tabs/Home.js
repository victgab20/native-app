import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication'





export default function Home({ navigation }) {
  const [isAuth, setAuth] = useState(false)

  async function checkIfIsAvaliable(){
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if(!compatible){
      Alert.alert("Printfinge não suportado")
    }
  }
  useEffect(() => {
    checkIfIsAvaliable();
  }, []);
  async function handleAuth(){
    const isBiometricStore = await LocalAuthentication.isEnrolledAsync();
    console.log(isBiometricStore)
    if(!isBiometricStore){
      Alert.alert("No PrintFinger Store")
    }
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticat with printfing',
      fallbackLabel: 'PrintFinger dont regonize'
    });
    if(auth){
      navigation.navigate('Baterry')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello There!</Text>
     <View
     style={styles.primaryBtn}
     >
     <Button
        color="purple"
        title="Start"
        onPress={handleAuth}
      />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2124',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 20,
    color: "white"
  },
  primaryBtn:{
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'purple',
    width: "40%"
  }
});
