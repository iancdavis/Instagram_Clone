import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here is where we import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCg6tOCyDGyE7eF2hoSKBempQZY5kgGSto',
  authDomain: 'instagram-clone-d86b7.firebaseapp.com',
  projectId: 'instagram-clone-d86b7',
  storageBucket: 'instagram-clone-d86b7.appspot.com',
  messagingSenderId: '660291078548',
  appId: '1:660291078548:web:d65c02d716ef5af708a781'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where we want to call the seed file (only once!)
// seedDatabase(firebase);

// console.log('firebase', firebase);
export { firebase, FieldValue };
