import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f0;
  padding-horizontal: 20px;
  padding-top: 20px;
`

export const HeaderContainer = styled.View`
  margin-bottom: 20px;
`

export const StoreName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #8a2be2; /* Purple color */
`

export const DeliveryInfo = styled.Text`
  font-size: 16px;
  color: #333;
`

export const StoreImage = styled.Image`
  width: 100%;
  height: 200px;
  resize-mode: cover;
  margin-bottom: 20px;
`

export const BouquetContainer = styled.View`
  margin-bottom: 20px;
`

export const BouquetHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #8a2be2; /* Purple color */
`

export const BouquetItem = styled.View`
  margin-bottom: 10px;
`

export const BouquetImage = styled.Image`
  width: 100px;
  height: 100px;
  resize-mode: cover;
  margin-bottom: 5px;
`

export const BouquetName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`

export const BouquetPrice = styled.Text`
  font-size: 16px;
  color: #666;
`
