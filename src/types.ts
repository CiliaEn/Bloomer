/* export type User = {
    name: String;
    phoneNumber: String;
    email: String;
    orders: Order[];
  }; */

export type Order = {
  store: Store
  bouquets: [Bouquet]
  orderDate: string
}

export type Store = {
  name: string
  deliveryFee: number
  deliveryTime: string
  image: string
  bouquets: Bouquet[]
  latitude: number
  longitude: number
  score: string
}

export type Bouquet = {
  name: string
  price: number
  imageUrl: string
}
