import { FC } from "react"
import { Store } from "../../../../types"
import * as S from "./styled"
import { Text } from "react-native"

type Props = {
  store: Store
}

export const StoreItem: FC<Props> = ({ store }) => {
  return (
    <S.Container>
      <Text>{store.name}</Text>
    </S.Container>
  )
}
