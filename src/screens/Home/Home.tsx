import { StackNavigationProp } from "@react-navigation/stack"
import { FC, useEffect, useState } from "react"
import { SafeAreaView, ScrollView } from "react-native"
import { Space } from "../../components/common/styled"
import useStores from "../../hooks/useStores"
import { RootStackParamList } from "../../navigation/types"
import { Store } from "../../types"
import { StoreItem } from "./components/StoreItem/StoreItem"
import * as S from "./styled"

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">

type Props = {
  navigation: HomeScreenNavigationProp
}

const Home: FC<Props> = ({ navigation }) => {
  const { stores } = useStores()
  const [searchQuery, setSearchQuery] = useState<string>("") // State to store search query
  const [filteredStores, setFilteredStores] = useState<Store[]>(stores) // State to store filtered stores

  const handleSearchQueryChange = (text: string) => {
    setSearchQuery(text)
  }

  useEffect(() => {
    const filtered = stores.filter((store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredStores(filtered)
  }, [searchQuery, stores])

  const handleOnStorePress = (store: Store) => {
    navigation.navigate("Store", { store: store })
  }

  return (
    <SafeAreaView>
      <S.WhiteBackground>
        <Space h12 />
        {/* Search input */}
        <S.StyledTextInput
          placeholder="Search stores..."
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
        />
        <Space h04 />
      </S.WhiteBackground>

      <ScrollView bounces={false}>
        {filteredStores.map((store) => (
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
