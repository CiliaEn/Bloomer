import { RouteProp } from "@react-navigation/native"
import { FC } from "react"
import { ScrollView } from "react-native"
import {
  Header,
  Heading2,
  ScreenHorizontalPadding,
  Space,
} from "../../components/common/styled"
import { RootStackParamList } from "../../navigation/types"
import { BouquetItem } from "./components/BouquetItem/BouquetItem"
import * as S from "./styled"

type StoreScreenRouteProp = RouteProp<RootStackParamList, "Store">

type Props = {
  route: StoreScreenRouteProp
}

const Store: FC<Props> = ({ route }) => {
  const store = route.params.store

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

  return (
    <ScrollView bounces={false}>
      <S.StoreImage source={getStoreImageUrl()} />
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
            <BouquetItem storeName={store.name} bouquet={bouquet} key={index} />
          ))}
        </ScreenHorizontalPadding>
      </S.SectionContainer>
    </ScrollView>
  )
}

export default Store
