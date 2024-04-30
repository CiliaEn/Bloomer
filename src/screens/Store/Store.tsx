import { RouteProp } from "@react-navigation/native"
import { FC } from "react"
import { View } from "react-native"
import { Header } from "../../components/common/styled"
import { RootStackParamList } from "../../navigation/types"

type StoreScreenRouteProp = RouteProp<RootStackParamList, "Store">

type Props = {
  route: StoreScreenRouteProp
}

const Store: FC<Props> = ({ route }) => {
  const store = route.params.store
  return (
    <View>
      <Header>{store.name}</Header>
    </View>
  )
}

export default Store
