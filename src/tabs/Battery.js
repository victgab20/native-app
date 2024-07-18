import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useBatteryLevel } from 'expo-battery';

export default function Battery() {
  const batteryLevel = useBatteryLevel() * 100;
  const batteryLevel1 = batteryLevel.toFixed(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Battery Level: {batteryLevel1}% </Text>
      {batteryLevel !== null && batteryLevel1 > 30 ? (
        <Image 
          source={require('../../assets/ronaldo80-.jpg')}
          style={styles.image}
        />
      ) : (
        <Image 
          source={require('../../assets/ronaldo20-.jpg')}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2124',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    color: 'white'
  },
  image: {
    width: 200,
    height: 200,
  }
});
