import styled from "styled-components/native"
import { Paragraph } from "../../components/common/styled"

export const HeaderContainer = styled.View`
  align-items: center;
  background-color: white;
  padding: 20px 0;
`

export const DeliveryInfo = styled(Paragraph)`
  color: #666;
`

export const StoreImage = styled.Image`
  width: 100%;
  height: 200px;
  resize-mode: cover;
`

export const SectionContainer = styled.View`
  padding-top: 20px;
  background-color: white;
`

export const BackButton = styled.TouchableOpacity`
  background-color: black;
  opacity: 0.7;
  border-radius: 20px;
  position: absolute;
  top: 60px;
  left: 16px;
  z-index: 1;
  padding: 10px;
`
