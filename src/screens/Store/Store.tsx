import { Ionicons } from "@expo/vector-icons"
import { RouteProp, useNavigation } from "@react-navigation/native"
import React, { FC } from "react"
import { ScrollView } from "react-native"
import {
  Header,
  Heading2,
  ScreenHorizontalPadding,
  Space,
} from "../../components/common/styled"
import useCart from "../../hooks/useCart"
import { RootStackParamList } from "../../navigation/types"
import { Bouquet } from "../../types"
import { BouquetItem } from "./components/BouquetItem/BouquetItem"
import * as S from "./styled"

type StoreScreenRouteProp = RouteProp<RootStackParamList, "Store">

type Props = {
  route: StoreScreenRouteProp
}

const Store: FC<Props> = ({ route }) => {
  const store = route.params.store
  const { orders } = useCart()
  const navigation = useNavigation()

  const getStoreImageUrl = () => {
    const storeImage = store.image
    if (storeImage === "flowers.jpeg") {
      return require(`../../../assets/flowers.jpeg`)
    } else if (storeImage === "flowers2.jpeg") {
      return require(`../../../assets/flowers2.jpeg`)
    } else if (storeImage === "flowers3.jpeg") {
      return require(`../../../assets/flowers3.jpeg`)
    } else if (storeImage === "flowers4.jpeg") {
      return require(`../../../assets/flowers4.jpeg`)
    } else {
      return require(`../../../assets/flowers.jpeg`)
    }
  }

  const getBouquetCount = (bouquet: Bouquet) => {
    const order = orders.find((order) => order.store.name === store.name)
    if (!order) return 0

    const bouquetInOrder = order.bouquets.find(
      (orderBouquet) => orderBouquet.bouquet.name === bouquet.name
    )
    return bouquetInOrder ? bouquetInOrder.amount : 0
  }

  return (
    <ScrollView bounces={false}>
      <S.StoreImage source={getStoreImageUrl()} />
      <S.BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" color="white" size={26} />
      </S.BackButton>
      <S.HeaderContainer>
        <Header>{store.name}</Header>
        <S.DeliveryInfo>
          Delivery Fee: ${store.deliveryFee} | Delivery Time:{" "}
          {store.deliveryTime}
        </S.DeliveryInfo>
      </S.HeaderContainer>
      <Space h04 />
      <S.SectionContainer>
        <ScreenHorizontalPadding>
          <Heading2>Available Bouquets</Heading2>
          <Space h20 />
          {store.bouquets.map((bouquet, index) => (
            <BouquetItem
              store={store}
              bouquet={bouquet}
              amount={getBouquetCount(bouquet)}
              key={index}
            />
          ))}
        </ScreenHorizontalPadding>
      </S.SectionContainer>
    </ScrollView>
  )
}

export default Store
