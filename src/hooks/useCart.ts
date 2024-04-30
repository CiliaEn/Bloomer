import { useState } from "react"
import { Bouquet } from "../types"

const useCart = () => {
  const [items, setItems] = useState<Bouquet[]>([])

  const addToCart = (item: Bouquet) => {
    setItems([...items, item])
  }

  return { items, addToCart }
}

export default useCart
