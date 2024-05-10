import { RouteProp } from "@react-navigation/native"
import { FC } from "react"
import { SafeAreaView, ScrollView } from "react-native"
import { BackButton } from "../../components/common/BackButton/BackButton"
import {
  Header,
  Heading1,
  ScreenHorizontalPadding,
  Space,
} from "../../components/common/styled"
import { RootStackParamList } from "../../navigation/types"
import { BouquetItem } from "../Store/components/BouquetItem/BouquetItem"

type CheckoutScreenRouteProp = RouteProp<RootStackParamList, "Checkout">

type Props = {
  route: CheckoutScreenRouteProp
}

const Checkout: FC<Props> = ({ route }) => {
  const order = route.params.order

  const orderTotal = order.bouquets.reduce((total, bouq) => {
    return total + bouq.bouquet.price * bouq.amount
  }, 0)

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <BackButton />
      <ScrollView bounces={false}>
        <ScreenHorizontalPadding>
          <Space h44 />
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
        </ScreenHorizontalPadding>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Checkout
