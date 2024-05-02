import { useCallback } from "react"
import { SafeAreaView, Text, View } from "react-native"
import useCart from "../../hooks/useCart"
import { BouquetItem } from "../Store/components/BouquetItem/BouquetItem"

const Cart = () => {
  const { items } = useCart()

  return (
    <SafeAreaView>
      <View>
        <Text>Cart</Text>
      </View>
      {items.map((item) => (
        <BouquetItem bouquet={item} />
      ))}
    </SafeAreaView>
  )
}

export default Cart
