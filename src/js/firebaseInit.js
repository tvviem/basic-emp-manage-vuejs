import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
// to skip warning date from firestore
firebaseApp.firestore().settings({timestampsInSnapshots: true})
export default firebaseApp.firestore()
