import { SafeAreaView } from "react-native-safe-area-context"
import useStores from "../../hooks/useStores"
import { StoreItem } from "./components/Store/Store"

const Home = () => {
  const { stores } = useStores()

  return (
    <SafeAreaView>
      {stores.map((store) => (
        <StoreItem key={store.longitude + store.latitude} store={store} />
      ))}
    </SafeAreaView>
  )
}

export default Home
