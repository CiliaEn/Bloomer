import { StackNavigationProp } from "@react-navigation/stack"
import { FC, useCallback, useEffect } from "react"
import { SafeAreaView, ScrollView } from "react-native"
import { ScreenHorizontalPadding, Space } from "../../components/common/styled"
import useStores from "../../hooks/useStores"
import { RootStackParamList } from "../../navigation/types"
import { Store } from "../../types"
import { StoreItem } from "./components/StoreItem/StoreItem"
import useCart from "../../hooks/useCart"

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">

type Props = {
  navigation: HomeScreenNavigationProp
}
const Home: FC<Props> = ({ navigation }) => {
  const { stores } = useStores()

  const handleOnStorePress = (store: Store) => {
    navigation.navigate("Store", { store: store })
  }

  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        {stores.map((store) => (
          <StoreItem
            key={store.longitude + store.latitude}
            store={store}
            onPress={() => handleOnStorePress(store)}
          />
        ))}

        <Space h20 />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
