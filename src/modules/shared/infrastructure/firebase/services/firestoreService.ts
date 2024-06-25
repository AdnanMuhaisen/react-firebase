import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "../firebaseConfigurations";

// init firebase app
initializeApp(firebaseConfig);

// init firestore service
export const db = getFirestore();
