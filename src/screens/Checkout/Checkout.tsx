import { RouteProp, useNavigation } from "@react-navigation/native"
import { FC } from "react"
import { SafeAreaView, ScrollView } from "react-native"
import { BackButton } from "../../components/common/BackButton/BackButton"
import {
  Header,
  Heading1,
  MyButton,
  ScreenHorizontalPadding,
  Space,
} from "../../components/common/styled"
import { RootStackParamList } from "../../navigation/types"
import { BouquetItem } from "../Store/components/BouquetItem/BouquetItem"
import * as S from "./styled"
import useCart from "../../hooks/useCart"

type CheckoutScreenRouteProp = RouteProp<RootStackParamList, "Checkout">

type Props = {
  route: CheckoutScreenRouteProp
}

const Checkout: FC<Props> = ({ route }) => {
  const navigation = useNavigation()
  const { setOrderAsBought } = useCart()

  const order = route.params.order
  const index = route.params.index

  const orderTotal = order.bouquets.reduce((total, bouq) => {
    return total + bouq.bouquet.price * bouq.amount
  }, 0)

  const handlePurchase = (index: number) => {
    setOrderAsBought(index)
    navigation.goBack()
  }

  return (
    <S.Container>
      <BackButton />
      <ScreenHorizontalPadding>
        <Space h48 />

        <ScrollView bounces={false}>
          <Header>{order.store.name}</Header>
          {order.bouquets.map((bouq) => (
            <BouquetItem
              bouquet={bouq.bouquet}
              store={order.store}
              amount={bouq.amount}
              checkout
            />
          ))}
          <Space h12 />
          <Heading1>{`Total: $${orderTotal}`}</Heading1>
          <Space h12 />
          <MyButton onPress={() => handlePurchase(index)}>
            <Heading1 light>Buy</Heading1>
          </MyButton>
        </ScrollView>
      </ScreenHorizontalPadding>
    </S.Container>
  )
}

export default Checkout
