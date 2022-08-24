import {initializeApp} from 'firebase/app';
import { getAuth,
        signInWithRedirect,
        signInWithPopup,
         GoogleAuthProvider } 
       from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCznC8peYZ_8VEU2I8edZGCe61sJSv_Rhw",
    authDomain: "clothing-db-13db6.firebaseapp.com",
    projectId: "clothing-db-13db6",
    storageBucket: "clothing-db-13db6.appspot.com",
    messagingSenderId: "902723298335",
    appId: "1:902723298335:web:64925a845364d28622212a"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);