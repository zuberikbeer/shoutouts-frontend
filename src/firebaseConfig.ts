import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABwNlP_UpVnCvUw3xEAf4gLtq83DmAxqI",
  authDomain: "shoutouts-7a362.firebaseapp.com",
  projectId: "shoutouts-7a362",
  storageBucket: "shoutouts-7a362.appspot.com",
  messagingSenderId: "410533165812",
  appId: "1:410533165812:web:9abbcfce53465b8ffcfca1",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();
export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
