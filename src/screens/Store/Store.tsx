import { RouteProp } from "@react-navigation/native"
import { FC } from "react"
import { RootStackParamList } from "../../navigation/types"
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

  const getBouquetImageUrl = (bouquetImageUrl: string) => {
    if (bouquetImageUrl === "fall.jpeg") {
      return require(`../../../assets/fall.jpeg`)
    } else if (bouquetImageUrl === "roses.jpeg") {
      return require(`../../../assets/roses.jpeg`)
    } else if (bouquetImageUrl === "spring.jpeg") {
      return require(`../../../assets/spring.jpeg`)
    } else {
      return require(`../../../assets/fall.jpeg`)
    }
  }
  return (
    <S.Container>
       <S.StoreImage source={getStoreImageUrl()} />
      <S.HeaderContainer>
        <S.StoreName>{store.name}</S.StoreName>
        <S.DeliveryInfo>
          Delivery Fee: ${store.deliveryFee} | Delivery Time:{" "}
          {store.deliveryTime}
        </S.DeliveryInfo>
      </S.HeaderContainer>
     
      <S.BouquetContainer>
        <S.BouquetHeader>Available Bouquets</S.BouquetHeader>
        {store.bouquets.map((bouquet, index) => (
          <S.BouquetItem key={index}>
            <S.BouquetImage source={getBouquetImageUrl(bouquet.imageUrl)} />
            <S.BouquetName>{bouquet.name}</S.BouquetName>
            <S.BouquetPrice>${bouquet.price}</S.BouquetPrice>
          </S.BouquetItem>
        ))}
      </S.BouquetContainer>
    </S.Container>
  )
}

export default Store
