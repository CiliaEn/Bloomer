import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import Cart from "./src/screens/Cart"
import Home from "./src/screens/Home"
import Store from "./src/screens/Store"
import Checkout from "./src/screens/Checkout"

const Tab = createBottomTabNavigator()

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="StoreScreen" component={Store} />
    </Stack.Navigator>
  )
}

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline"
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "rgba(42, 11, 232, 1)",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Cart" component={CartStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
