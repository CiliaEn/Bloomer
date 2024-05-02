import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Bouquet } from "../types"

const CART_STORAGE_KEY = "cartItems"

const useCart = () => {
  const [items, setItems] = useState<Bouquet[]>([])

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem(CART_STORAGE_KEY)
        if (storedItems !== null) {
          setItems(JSON.parse(storedItems))
        }
      } catch (error) {
        console.error("Error loading cart items:", error)
      }
    }
    loadCartItems()
  }, [])

  const addToCart = async (item: Bouquet) => {
    try {
      const updatedItems = [...items, item]
      setItems(updatedItems)
      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems))
    } catch (error) {
      console.error("Error adding item to cart:", error)
    }
  }

  return { items, addToCart }
}

export default useCart
