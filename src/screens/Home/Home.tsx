import { StackNavigationProp } from "@react-navigation/stack"
import { FC } from "react"
import { SafeAreaView, ScrollView } from "react-native"
import { ScreenHorizontalPadding, Space } from "../../components/common/styled"
import useStores from "../../hooks/useStores"
import { RootStackParamList } from "../../navigation/types"
import { Store } from "../../types"
import { StoreItem } from "./components/Store/StoreItem"

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
      <ScrollView>
        <ScreenHorizontalPadding>
          {stores.map((store) => (
            <StoreItem
              key={store.longitude + store.latitude}
              store={store}
              onPress={() => handleOnStorePress(store)}
            />
          ))}
        </ScreenHorizontalPadding>
        <Space h20 />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
