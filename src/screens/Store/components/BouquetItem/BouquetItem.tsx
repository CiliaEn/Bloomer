import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"
import { TouchableOpacity, View } from "react-native"
import {
  FlexRow,
  Heading2,
  Heading3,
  Space
} from "../../../../components/common/styled"
import useCart from "../../../../hooks/useCart"
import { Bouquet } from "../../../../types"
import * as S from "./styled"

type Props = {
  bouquet: Bouquet
  storeName: string
  amount?: number
}
export const BouquetItem: FC<Props> = ({ bouquet, storeName, amount }) => {
  const { addToCart, items, removeFromCart } = useCart()
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

  return (
    <TouchableOpacity>
      <S.Container spaceBetween>
        <FlexRow>
          <S.Image source={getBouquetImageUrl(bouquet.imageUrl)} />
          <View>
            <Space h08 />
            <Heading3>{bouquet.name}</Heading3>
            <Space h04 />
            <S.Price>${bouquet.price}</S.Price>
          </View>
        </FlexRow>

        {amount === 0 ? (
          <S.IconButton onPress={() => addToCart(bouquet, storeName)}>
            <Ionicons name={"add-sharp"} size={16} />
          </S.IconButton>
        ) : (
          <FlexRow>
            {amount && amount > 1 ? (
              <S.IconButton onPress={() => removeFromCart(storeName, bouquet)}>
                <Ionicons name="remove" size={16} />
              </S.IconButton>
            ) : (
              <Ionicons
                name="trash"
                size={20}
                onPress={() => removeFromCart(storeName, bouquet)}
              />
            )}
            <Space w08 />
            <Heading2>{amount}</Heading2>
            <Space w08 />
            <S.IconButton onPress={() => addToCart(bouquet, storeName)}>
              <Ionicons name={"add-sharp"} size={16} />
            </S.IconButton>
          </FlexRow>
        )}
      </S.Container>
    </TouchableOpacity>
  )
}
