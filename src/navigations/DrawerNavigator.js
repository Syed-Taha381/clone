import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeStack } from './StackNavigators'
import { Icon } from 'react-native-elements'
import { colors } from '../global/styles'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    <Drawer.Navigator>
        <Drawer.Screen
            name="HomeStack"
            components={HomeStack}
            option={{
                titile: "Home",
                drawerIcon: ({ focussed, size }) => <Icon type="material community" name='home' color={focussed ? "#7cc" : colors.grey2} size={size} />,
                headerShown: false
            }}

        />
    </Drawer.Navigator>
}