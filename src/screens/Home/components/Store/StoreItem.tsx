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
  return (
    <S.Container onPress={onPress} >
      <S.ImageContainer>
        <Image
          style={{ height: 140, width: 340, borderRadius: 10 }}
          source={require(`../../../../../assets/flowers.jpeg`)}
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
