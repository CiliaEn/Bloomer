import useStores from "../../hooks/useStores"
import { StoreItem } from "./components/Store/StoreItem"
import { ScreenHorizontalPadding, Space } from "../../components/common/styled"
import { SafeAreaView, ScrollView } from "react-native"

const Home = () => {
  const { stores } = useStores()

  return (
    <SafeAreaView>
      <ScrollView>
        <ScreenHorizontalPadding>
          {stores.map((store) => (
            <StoreItem key={store.longitude + store.latitude} store={store} />
          ))}
        </ScreenHorizontalPadding>
        <Space h20 />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
