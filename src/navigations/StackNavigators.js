import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homescreen from '../screens/HomeScreen'

const Home = createNativeStackNavigator()

export function HomeStack() {
    return (
        <Home.Navigator>
            <Home.Screen
                name="HomeScreen"
                components={Homescreen}
                option={{ headerShown: false }}
            />
        </Home.Navigator>
    )
}