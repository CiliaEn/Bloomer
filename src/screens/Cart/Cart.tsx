import React from "react"
import { Button, SafeAreaView, ScrollView } from "react-native"
import {
  CustomButton,
  Header,
  Heading1,
  MyButton,
  Paragraph,
  ScreenHorizontalPadding,
  Space,
} from "../../components/common/styled"
import useCart from "../../hooks/useCart"
import { BouquetItem } from "../Store/components/BouquetItem/BouquetItem"
import * as S from "./styled"

const Cart = () => {
  const { items, removeFromCart } = useCart()

  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        <ScreenHorizontalPadding>
          <Header>Cart</Header>
          <Space h20 />
          {Object.keys(items).map((storeName) => (
            <S.Store key={storeName}>
              <Heading1>{storeName}</Heading1>
              {items[storeName].map((cartItem, index) => (
                <BouquetItem
                  key={index}
                  storeName={storeName}
                  bouquet={cartItem.bouquet}
                  amount={cartItem.count}
                />
              ))}
              <Space h12 />
              <MyButton>
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
