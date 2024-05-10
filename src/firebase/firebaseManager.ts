import { initializeApp } from "firebase/app"
import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore"
import { Store } from "../types"
import { firebaseConfig } from "./firebaseConfig"

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const fetchStoresData = async (): Promise<Store[]> => {
  const storesData: Store[] = []

  try {
    const querySnapshot = await getDocs(collection(db, "stores"))
    querySnapshot.forEach((doc) => {
      const storeData: DocumentData = doc.data()
      const store: Store = {
        name: storeData.name || "",
        deliveryFee: storeData.deliveryFee || 0,
        deliveryTime: storeData.deliveryTime || "",
        image: storeData.image || "",
        bouquets: storeData.bouquets || [],
        latitude: storeData.latitude || 0,
        longitude: storeData.longitude || 0,
        score: storeData.score || "",
      }
      storesData.push(store)
    })
  } catch (error) {
    console.error("Error fetching stores:", error)
  }

  return storesData
}

export { app, db, fetchStoresData }
