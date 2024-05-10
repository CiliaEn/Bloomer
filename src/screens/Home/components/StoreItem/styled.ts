import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Paragraph } from "../../../../components/common/styled"

export const Container = styled(TouchableOpacity)`
  padding: 10px;
  background-color: white;
`

export const ImageContainer = styled.View`
  align-items: center;
  margin-bottom: 10px;
`

export const Detail = styled(Paragraph)`
  color: grey;
`

export const Dot = styled.View`
  background-color: grey;
  width: 2px;
  height: 2px;
  border-radius: 10px;
  margin: 0 10px;
`

export const Rating = styled.View`
  background-color: lightgrey;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`
