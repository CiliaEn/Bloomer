import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Bouquet, Order, Store } from "../types"

const CART_STORAGE_KEY = "cartOrders"

const useCart = () => {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const loadCartOrders = async () => {
      try {
        const storedOrders = await AsyncStorage.getItem(CART_STORAGE_KEY)
        if (storedOrders !== null) {
          setOrders(JSON.parse(storedOrders))
        }
      } catch (error) {
        console.error("Error loading cart orders:", error)
      }
    }
    loadCartOrders()
  }, [])

  const addToCart = async (store: Store, bouquet: Bouquet) => {
    try {
      const existingOrderIndex = orders.findIndex(
        (order) => order.store.name === store.name
      )

      if (existingOrderIndex !== -1) {
        const existingOrder = orders[existingOrderIndex]
        const bouquetIndex = existingOrder.bouquets.findIndex(
          (orderBouquet) => orderBouquet.bouquet.name === bouquet.name
        )

        if (bouquetIndex !== -1) {
          const updatedBouquets = [...existingOrder.bouquets]
          updatedBouquets[bouquetIndex].amount++
          existingOrder.bouquets = updatedBouquets
        } else {
          existingOrder.bouquets.push({ bouquet, amount: 1 })
        }

        const updatedOrders = [...orders]
        updatedOrders[existingOrderIndex] = existingOrder
        setOrders(updatedOrders)
      } else {
        const newOrder: Order = {
          store,
          bouquets: [{ bouquet, amount: 1 }],
        }

        const updatedOrders = [...orders, newOrder]
        setOrders(updatedOrders)
      }

      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(orders))
    } catch (error) {
      console.error("Error adding order to cart:", error)
    }
  }

  const setOrderAsBought = async (index: number) => {
    try {
      const updatedOrders = [...orders]
      updatedOrders[index].orderDate = new Date()
      setOrders(updatedOrders)
      await AsyncStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(updatedOrders)
      )
    } catch (error) {
      console.error("Error setting order as bought:", error)
    }
  }

  const removeOrderFromCart = async (index: number) => {
    try {
      const updatedOrders = [...orders]
      updatedOrders.splice(index, 1)
      setOrders(updatedOrders)
      await AsyncStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(updatedOrders)
      )
    } catch (error) {
      console.error("Error removing order from cart:", error)
    }
  }

  const removeBouquetFromOrder = async (
    storeName: string,
    bouquet: Bouquet
  ) => {
    try {
      const updatedOrders = orders.map((order) => {
        if (order.store.name === storeName) {
          const updatedBouquets = order.bouquets.filter(
            (orderBouquet) => orderBouquet.bouquet.name !== bouquet.name
          )
          if (updatedBouquets.length === 0) {
            return null
          }
          return { ...order, bouquets: updatedBouquets }
        }
        return order
      })

      const filteredOrders = updatedOrders.filter(Boolean) as Order[]

      setOrders(filteredOrders)
      await AsyncStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(filteredOrders)
      )
    } catch (error) {
      console.error("Error removing bouquet from order:", error)
    }
  }

  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem(CART_STORAGE_KEY)
      setOrders([])
    } catch (error) {
      console.error("Error clearing cart:", error)
    }
  }

  return {
    orders,
    addToCart,
    clearCart,
    removeOrderFromCart,
    removeBouquetFromOrder,
    setOrderAsBought,
  }
}

export default useCart
