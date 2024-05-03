import { RouteProp } from "@react-navigation/native";
import { FC } from "react";
import { ScrollView } from "react-native";
import {
  Header,
  Heading2,
  ScreenHorizontalPadding,
  Space,
} from "../../components/common/styled";
import { RootStackParamList } from "../../navigation/types";
import { BouquetItem } from "./components/BouquetItem/BouquetItem";
import * as S from "./styled";
import useCart from "../../hooks/useCart"; // Import useCart hook to access cart items
import { Bouquet } from "../../types"; // Import Bouquet and Store types

type StoreScreenRouteProp = RouteProp<RootStackParamList, "Store">;

type Props = {
  route: StoreScreenRouteProp;
};

const Store: FC<Props> = ({ route }) => {
  const store = route.params.store;
  const { items } = useCart(); // Get cart items from useCart hook

  const getStoreImageUrl = () => {
    const storeImage = store.image;
    if (storeImage === "flowers.jpeg") {
      return require(`../../../assets/flowers.jpeg`);
    } else if (storeImage === "flowers2.jpeg") {
      return require(`../../../assets/flowers2.jpeg`);
    } else if (storeImage === "flowers3.jpeg") {
      return require(`../../../assets/flowers3.jpeg`);
    } else if (storeImage === "flowers4.jpeg") {
      return require(`../../../assets/flowers4.jpeg`);
    } else {
      return require(`../../../assets/flowers.jpeg`);
    }
  };

  const getBouquetCount = (bouquet: Bouquet) => {
    const storeItems = items[store.name];
    if (!storeItems) return 0;
    
    const bouquetInCart = storeItems.find(item => item.bouquet.name === bouquet.name);
    return bouquetInCart ? bouquetInCart.count : 0;
  };

  return (
    <ScrollView bounces={false}>
      <S.StoreImage source={getStoreImageUrl()} />
      <S.HeaderContainer>
        <Header>{store.name}</Header>
        <S.DeliveryInfo>
          Delivery Fee: ${store.deliveryFee} | Delivery Time:{" "}
          {store.deliveryTime}
        </S.DeliveryInfo>
      </S.HeaderContainer>
      <Space h04 />
      <S.SectionContainer>
        <ScreenHorizontalPadding>
          <Heading2>Available Bouquets</Heading2>
          <Space h20 />
          {store.bouquets.map((bouquet, index) => (
            <BouquetItem
              storeName={store.name}
              bouquet={bouquet}
              amount={getBouquetCount(bouquet)} // Pass count of bouquets in cart
              key={index}
            />
          ))}
        </ScreenHorizontalPadding>
      </S.SectionContainer>
    </ScrollView>
  );
};

export default Store;
