import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Feather} from '@expo/vector-icons'
import Home from '../tabs/Home'
import Battery from '../tabs/Battery';
import Conection from '../tabs/Conection';
import {StyleSheet} from 'react-native'
import StackRoutes from './stack.routes';

const Tab = createBottomTabNavigator();


export default function TabRoutes(){
    return(
        <Tab.Navigator
        screenOptions={{headerShown: false,
            tabBarStyle:{
                backgroundColor: '#1f2124',
                borderColor: '#1f2124'
            },
            tabBarActiveTintColor: 'purple'
        }}
        >
            <Tab.Screen 
            name="Battery"
            component={Battery}
            options={{
                tabBarIcon: ({size}) => <Feather name="battery" color={"purple"} size={size} />,
                tabBarLabel: 'Battery'
            }}
            />
            <Tab.Screen
            name='Conection'
            component={Conection}
            style={styles.container}
            options={{
                tabBarIcon: ({size}) => <Feather name="wifi" color={"purple"} size={size} />,
                tabBarLabel: 'Connection'
            }}
            />
        </Tab.Navigator>
    )

    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    textStyle:{
        color: "white"
    }
})