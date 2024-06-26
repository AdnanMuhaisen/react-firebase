import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firabaseConfig } from "../firebaseConfigurations";

// init firebase app
initializeApp(firabaseConfig);

// init firestore service
export const db = getFirestore();
