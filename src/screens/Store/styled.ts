import styled from "styled-components/native"
import { FlexRow, Paragraph } from "../../components/common/styled"

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


