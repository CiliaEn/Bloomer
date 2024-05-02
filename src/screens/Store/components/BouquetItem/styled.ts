import styled from "styled-components/native"
import { FlexRow, Paragraph } from "../../../../components/common/styled"

export const Container = styled(FlexRow)`
  align-items: flex-start;
  padding: 10px 0;
  border-bottom-width: 0.2px;
  border-color: #999;
`

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`

export const Add = styled.View`
  background-color: white;
  border-radius: 50px;
  position: absolute;
  bottom: 4;
  right: 4;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
`

export const Price = styled(Paragraph)`
  color: #666;
`