import { useEffect, useState } from "react"
import { Store } from "../types"
import { fetchStoresData } from "../firebase/firebaseManager"

const useStores = () => {
  const [stores, setStores] = useState<Store[]>([])

  useEffect(() => {
    const getStores = async () => {
      try {
        const fetchedStores = await fetchStoresData()
        setStores(fetchedStores)
      } catch (error) {
        console.error("Error fetching stores:", error)
      }
    }
    getStores()
  }, [])

  return { stores }
}

export default useStores
