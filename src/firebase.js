import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCWfW_G0gRfOSyRA9D3BbzGLoT4W7KsJ4Q",
  authDomain: "tactical-grid-320807.firebaseapp.com",
  projectId: "tactical-grid-320807",
  storageBucket: "tactical-grid-320807.appspot.com",
  messagingSenderId: "949109240812",
  appId: "1:949109240812:web:cc8f774605fe06fb7046c9",
  measurementId: "G-8B2QHELFBD"
})

const firestore = app.firestore()


export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
