import { StackNavigationProp } from "@react-navigation/stack"
import { Store } from "../types"

export type RootStackParamList = {
  Home: undefined
  Store: { store: Store }
  Cart: undefined
  Checkout: undefined
}

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>
