// This import loads the firebase namespace.
import { firebase } from "@firebase/app"
import "firebase/firestore"

// These imports load individual services into the firebase namespace.
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqVdMb8CCgFQgtts7n9J3XKxQTaWeCuFI",
  authDomain: "disneyplus-clone-a9549.firebaseapp.com",
  projectId: "disneyplus-clone-a9549",
  storageBucket: "disneyplus-clone-a9549.appspot.com",
  messagingSenderId: "527239985610",
  appId: "1:527239985610:web:87fb93c3a09f6aa1a2b733",
  measurementId: "G-SL7D7CBMW9",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
