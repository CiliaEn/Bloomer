import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"
import { TouchableOpacity, View } from "react-native"
import { Heading3, Space } from "../../../../components/common/styled"
import useCart from "../../../../hooks/useCart"
import { Bouquet } from "../../../../types"
import * as S from "./styled"

type Props = {
  bouquet: Bouquet
  storeName: string
  amount?: number
}
export const BouquetItem: FC<Props> = ({ bouquet, storeName, amount }) => {
  const { addToCart } = useCart()
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

  const heading = amount ? `${bouquet.name} x ${amount}` : bouquet.name

  return (
    <TouchableOpacity onPress={() => addToCart(bouquet, storeName)}>
      <S.Container spaceBetween>
        <View>
          <Space h08 />
          <Heading3>{heading}</Heading3>
          <Space h04 />
          <S.Price>${bouquet.price}</S.Price>
        </View>
        <View>
          <S.Image source={getBouquetImageUrl(bouquet.imageUrl)} />
          <S.Add>
            <Ionicons name={"add-sharp"} size={16} />
          </S.Add>
        </View>
      </S.Container>
    </TouchableOpacity>
  )
}
