import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"
import { TouchableOpacity, View } from "react-native"
import {
  FlexRow,
  Heading2,
  Heading3,
  Space,
} from "../../../../components/common/styled"
import useCart from "../../../../hooks/useCart"
import { Bouquet, Store } from "../../../../types"
import * as S from "./styled"

type Props = {
  bouquet: Bouquet
  store: Store
  amount?: number
  checkout?: boolean
}
export const BouquetItem: FC<Props> = ({
  bouquet,
  store,
  amount,
  checkout,
}) => {
  const { addToCart, removeBouquetFromOrder } = useCart()
  const getBouquetImageUrl = (bouquetImageUrl: string) => {
    if (bouquetImageUrl === "fall.jpeg") {
      return require(`../../../../../assets/fall.jpeg`)
    } else if (bouquetImageUrl === "roses.jpeg") {
      return require(`../../../../../assets/roses.jpeg`)
    } else if (bouquetImageUrl === "spring.jpeg") {
      return require(`../../../../../assets/spring.jpeg`)
    } else {
      return require(`../../../../../assets/fall.jpeg`)
    }
  }

  const bouquetPrice =
    checkout && amount ? bouquet.price * amount : bouquet.price

  return (
    <TouchableOpacity>
      <S.Container spaceBetween>
        <FlexRow>
          <S.Image source={getBouquetImageUrl(bouquet.imageUrl)} />
          <View>
            <Space h08 />
            <Heading3>{bouquet.name}</Heading3>
            <Space h04 />
            <S.Price>${bouquetPrice}</S.Price>
          </View>
        </FlexRow>

        {amount === 0 ? (
          <S.IconButton onPress={() => addToCart(store, bouquet)}>
            <Ionicons name={"add-sharp"} size={16} />
          </S.IconButton>
        ) : (
          <FlexRow>
            {amount && amount > 1 ? (
              <S.IconButton
                onPress={() => removeBouquetFromOrder(store.name, bouquet)}
              >
                <Ionicons name="remove" size={16} />
              </S.IconButton>
            ) : (
              <Ionicons
                name="trash"
                size={20}
                onPress={() => removeBouquetFromOrder(store.name, bouquet)}
              />
            )}
            <Space w08 />
            <Heading2>{amount}</Heading2>
            <Space w08 />
            <S.IconButton onPress={() => addToCart(store, bouquet)}>
              <Ionicons name={"add-sharp"} size={16} />
            </S.IconButton>
          </FlexRow>
        )}
      </S.Container>
    </TouchableOpacity>
  )
}
