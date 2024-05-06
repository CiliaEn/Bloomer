import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Bouquet, Store } from "../types"

const CART_STORAGE_KEY = "cartItems"

const useCart = () => {
  const [items, setItems] = useState<{
    [key: string]: { bouquet: Bouquet; count: number }[]
  }>({})

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

  const addToCart = async (bouquet: Bouquet, store: string) => {
    try {
      const updatedItems = { ...items }
      const key = store

      if (!updatedItems[key]) {
        updatedItems[key] = [{ bouquet, count: 1 }]
      } else {
        const bouquetIndex = updatedItems[key].findIndex(
          (obj) => obj.bouquet.name === bouquet.name
        )
        if (bouquetIndex === -1) {
          updatedItems[key].push({ bouquet, count: 1 })
        } else {
          updatedItems[key][bouquetIndex].count++
        }
      }

      setItems(updatedItems)
      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems))
    } catch (error) {
      console.error("Error adding item to cart:", error)
    }
  }

  const removeFromCart = async (store: string, bouquet: Bouquet) => {
    try {
      const updatedItems = { ...items }
      const key = store

      if (updatedItems[key]) {
        const bouquetIndex = updatedItems[key].findIndex(
          (obj) => obj.bouquet.name === bouquet.name
        )
        if (bouquetIndex !== -1) {
          if (updatedItems[key][bouquetIndex].count === 1) {
            updatedItems[key].splice(bouquetIndex, 1)
          } else {
            updatedItems[key][bouquetIndex].count--
          }
        }
      }

      setItems(updatedItems)
      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems))
    } catch (error) {
      console.error("Error removing item from cart:", error)
    }
  }

  const deleteOrderFromStore = async (storeName: string) => {
    try {
      const updatedItems = { ...items }
      delete updatedItems[storeName]

      setItems(updatedItems)
      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems))
    } catch (error) {
      console.error("Error deleting order from store:", error)
    }
  }

  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem(CART_STORAGE_KEY)
      setItems({})
    } catch (error) {
      console.error("Error clearing cart:", error)
    }
  }

  return { items, addToCart, clearCart, removeFromCart, deleteOrderFromStore }
}

export default useCart
