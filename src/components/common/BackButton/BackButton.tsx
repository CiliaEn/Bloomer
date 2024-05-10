import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import * as S from "./styled"

export const BackButton = () => {
  const navigation = useNavigation()

  return (
    <S.Container onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" color="white" size={26} />
    </S.Container>
  )
}
