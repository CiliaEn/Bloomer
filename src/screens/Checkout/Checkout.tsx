import { StackNavigationProp } from "@react-navigation/stack"
import { SafeAreaView } from "react-native"
import { RootStackParamList } from "../../navigation/types"
import { FC } from "react"

type CheckoutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Checkout"
>

type Props = {
  navigation: CheckoutScreenNavigationProp
}

const Checkout: FC<Props> = ({ navigation }) => {
  return <SafeAreaView></SafeAreaView>
}

export default Checkout
