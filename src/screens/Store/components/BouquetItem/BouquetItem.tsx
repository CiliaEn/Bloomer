import { FC } from "react"
import { TouchableOpacity, View } from "react-native"
import { Heading3, Space } from "../../../../components/common/styled"
import { Bouquet } from "../../../../types"
import * as S from "./styled"
import { Ionicons } from "@expo/vector-icons"
import useCart from "../../../../hooks/useCart"

type Props = {
  bouquet: Bouquet
}
export const BouquetItem: FC<Props> = ({ bouquet }) => {
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
  return (
    <TouchableOpacity onPress={() => addToCart(bouquet)}>
      <S.Container spaceBetween>
        <View>
          <Space h08 />
          <Heading3>{bouquet.name}</Heading3>
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
