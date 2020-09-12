import * as firebase from 'firebase'
import 'firebase/firestore'
const config = {
  apiKey: 'AIzaSyAhNbqPJgHwm_uo9DuM-2XRJzd0reGXYhI',
  authDomain: 'retrospect-54ff1.firebaseapp.com',
  databaseURL: 'https://retrospect-54ff1.firebaseio.com',
  projectId: 'retrospect-54ff1',
  storageBucket: 'retrospect-54ff1.appspot.com',
  messagingSenderId: '662973776306',
  appId: '1:662973776306:web:ede90dda3c70c30441a4ab',
  measurementId: 'G-TSXTBG6EDG'
}
firebase.initializeApp(config)

export default firebase
