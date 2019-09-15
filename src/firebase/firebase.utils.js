import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDK_BDhjXr6f25JYnviIlQguBw5qVaNPEY',
  authDomain: 'crwn-db-97899.firebaseapp.com',
  databaseURL: 'https://crwn-db-97899.firebaseio.com',
  projectId: 'crwn-db-97899',
  storageBucket: '',
  messagingSenderId: '1011917521057',
  appId: '1:1011917521057:web:9deaa2e810088095fc70e0'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
