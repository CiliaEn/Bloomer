import { Ionicons } from "@expo/vector-icons"
import { StackNavigationProp } from "@react-navigation/stack"
import React, { FC } from "react"
import { SafeAreaView, ScrollView } from "react-native"
import {
  Header,
  Heading1,
  Heading3,
  MyButton,
  Paragraph,
  ScreenHorizontalPadding,
  Space,
} from "../../components/common/styled"
import useCart from "../../hooks/useCart"
import { RootStackParamList } from "../../navigation/types"
import { Order } from "../../types"
import { BouquetItem } from "../Store/components/BouquetItem/BouquetItem"
import * as S from "./styled"

type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, "Cart">

type Props = {
  navigation: CartScreenNavigationProp
}

const Cart: FC<Props> = ({ navigation }) => {
  const { orders, removeOrderFromCart } = useCart()

  const goToCheckout = (order: Order, index: number) => {
    navigation.navigate("Checkout", { order: order, index: index })
  }

  const filteredOrders = orders.filter((order) => !order.orderDate)

  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        <ScreenHorizontalPadding>
          <Header>Cart</Header>
          <Space h20 />
          {filteredOrders.length === 0 && (
            <Heading3>You have no items in the cart</Heading3>
          )}
          {filteredOrders.map((order, index) => (
            <S.Store key={index}>
              <S.DeleteButton onPress={() => removeOrderFromCart(index)}>
                <Ionicons name="close" size={24} />
              </S.DeleteButton>
              <Heading1>{order.store.name}</Heading1>
              {order.bouquets.map((cartItem, index) => (
                <BouquetItem
                  key={index}
                  store={order.store}
                  bouquet={cartItem.bouquet}
                  amount={cartItem.amount}
                />
              ))}
              <Space h12 />
              <MyButton onPress={() => goToCheckout(order, index)}>
                <Paragraph light bold>
                  Go to checkout
                </Paragraph>
              </MyButton>
            </S.Store>
          ))}
        </ScreenHorizontalPadding>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Cart
