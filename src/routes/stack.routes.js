import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Battery from "../tabs/Battery";
import Home from "../tabs/Home";
const Stack = createNativeStackNavigator();

export default function StackTab(){
    return(
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Baterry" component={Battery} />
        </Stack.Navigator>
    </NavigationContainer>
      )
}