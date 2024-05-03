import styled from "styled-components/native"
import { FlexRow, Paragraph } from "../../../../components/common/styled"

export const Container = styled(FlexRow)`
  padding: 10px 0;
  border-bottom-width: 0.2px;
  border-color: #999;
`

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`

export const IconButton = styled.TouchableOpacity`
  background-color: lightgrey;
  border-radius: 20px;
  height: 24px;
  width: 24px;
  align-items: center;
  justify-content: center;
`

export const Price = styled(Paragraph)`
  color: #666;
`
