import { FC } from "react"
import { Store } from "../../../../types"
import * as S from "./styled"
import { Image, Text } from "react-native"
import {
  FlexRow,
  Header,
  Paragraph,
} from "../../../../components/common/styled"

type Props = {
  store: Store
}

export const StoreItem: FC<Props> = ({ store }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          style={{ height: 140, width: 340 }}
          source={require("../../../../../assets/flowers.jpeg")}
        />
      </S.ImageContainer>

      <Header>{store.name}</Header>
      <FlexRow spaceBetween>
        <Paragraph>{store.deliveryTime}</Paragraph>
        <Paragraph>{store.deliveryFee}</Paragraph>
        <Paragraph>{store.score}</Paragraph>
      </FlexRow>
    </S.Container>
  )
}
