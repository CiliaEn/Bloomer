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

export type OrderBouquet = {
  bouquet: Bouquet
  amount: number
}

export type Order = {
  store: Store
  bouquets: OrderBouquet[]
  orderDate?: string
}
