import { ViewProps } from "react-native"
import styled from "styled-components/native"

export const ScreenHorizontalPadding = styled.View`
  margin: 0 20px;
`

export const CustomText = styled.Text``

export const Paragraph = styled(CustomText)`
  font-size: 12px;
`

export const Header = styled(CustomText)`
  font-size: 18px;
  font-weight: 600;
`
type FlexRowProps = {
  spaceBetween?: boolean
  center?: boolean
  start?: boolean
}

export const FlexRow = styled.View<FlexRowProps & ViewProps>`
  flex-direction: row;
  align-items: center;
  ${(props) => props.spaceBetween && "justify-content: space-between;"}
  ${(props) => props.center && "justify-content: center;"}
    ${(props) => props.start && "justify-content: flex-start;"}
`

function getSpacing(propChar: "w" | "h") {
  return (props: SpaceProps) => {
    if (props.exact) return props.exact

    const propKeys = Object.keys(props)
    const spacingProp = propKeys.find((p) => p[0] === propChar)

    if (!spacingProp) return 0

    const spacingValue = +spacingProp.substr(1)

    if (spacingValue % 4 !== 0) return 0

    return Math.round(spacingValue)
  }
}

type SpaceProps = {
  exact?: number
  h04?: boolean
  h08?: boolean
  h12?: boolean
  h16?: boolean
  h20?: boolean
  h24?: boolean
  h28?: boolean
  h32?: boolean
  h36?: boolean
  h40?: boolean
  h44?: boolean
  h48?: boolean
  w04?: boolean
  w08?: boolean
  w12?: boolean
  w16?: boolean
  w20?: boolean
  w24?: boolean
  w28?: boolean
  w32?: boolean
  w36?: boolean
  w40?: boolean
  w44?: boolean
  w48?: boolean
}

export const Space = styled.View<ViewProps & SpaceProps>`
  height: ${getSpacing("h")};
  width: ${getSpacing("w")};
`