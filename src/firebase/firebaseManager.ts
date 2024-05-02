import { initializeApp } from "firebase/app"
import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore"
import { Store } from "../types"
import { firebaseConfig } from "./firebaseConfig"

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

// Array of available bouquet image URLs
const bouquetImageUrls = ["fall.jpeg", "roses.jpeg", "spring.jpeg"];

// Function to pick a random item from an array
const getRandomItem = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

const updateBouquetImages = async (): Promise<void> => {
  try {
    const querySnapshot = await getDocs(collection(db, "stores"));
    querySnapshot.forEach(async (doc) => {
      const storeData = doc.data() as Store;
      const updatedBouquets = storeData.bouquets.map(bouquet => {
        // Assigning random bouquet image URL
        return { ...bouquet, imageUrl: getRandomItem(bouquetImageUrls) };
      });
      await updateDoc(doc.ref, { bouquets: updatedBouquets });
    });
    console.log("Bouquet images updated successfully.");
  } catch (error) {
    console.error("Error updating bouquet images:", error);
    throw error;
  }
};

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

export { app, db, fetchStoresData, updateBouquetImages }
