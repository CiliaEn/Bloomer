import { FC } from "react"
import { Store } from "../../../../types"
import * as S from "./styled"
import { Image, Text } from "react-native"
import {
  FlexRow,
  Header,
  Paragraph,
  Space,
} from "../../../../components/common/styled"
import useCart from "../../../../hooks/useCart"

type Props = {
  store: Store
  onPress: () => void
}

export const StoreItem: FC<Props> = ({ store, onPress }) => {
  const getImageUrl = () => {
    const storeImage = store.image
    if (storeImage === "flowers.jpeg") {
      return require(`../../../../../assets/flowers.jpeg`)
    } else if (storeImage === "flowers2.jpeg") {
      return require(`../../../../../assets/flowers2.jpeg`)
    } else if (storeImage === "flowers3.jpeg") {
      return require(`../../../../../assets/flowers3.jpeg`)
    } else if (storeImage === "flowers4.jpeg") {
      return require(`../../../../../assets/flowers4.jpeg`)
    } else {
      return require(`../../../../../assets/flowers.jpeg`)
    }
  }

  return (
    <S.Container onPress={onPress}>
      <S.ImageContainer>
        <Image
          style={{ height: 140, width: 340, borderRadius: 10 }}
          source={getImageUrl()}
        />
      </S.ImageContainer>
      <FlexRow spaceBetween>
        <Header>{store.name}</Header>
        <S.Rating>
          <Paragraph>{store.score}</Paragraph>
        </S.Rating>
      </FlexRow>
      <FlexRow>
        <Space w04 />
        <S.Detail>{"$" + store.deliveryFee}</S.Detail>
        <S.Dot />
        <S.Detail>{store.deliveryTime}</S.Detail>
      </FlexRow>
    </S.Container>
  )
}
