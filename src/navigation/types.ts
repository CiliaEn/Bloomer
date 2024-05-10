import { StackNavigationProp } from "@react-navigation/stack"
import { Order, Store } from "../types"

export type RootStackParamList = {
  Home: undefined
  Store: { store: Store }
  Cart: undefined
  Checkout: { order: Order }
}

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>
