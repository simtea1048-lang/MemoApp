import { initializeApp, FirebaseApp } from 'firebase/app'
import { initializeAuth,  getReactNativePersistence } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FB_APP_ID
}

const app: FirebaseApp  = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db: Firestore = getFirestore(app)

export { app, auth, db }
