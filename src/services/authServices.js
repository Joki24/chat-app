//authServices.js

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { auth } from "../config/firebase";
import { createUser } from "./chatServices";

// login
export const login = async (creds) => {
    return await signInWithEmailAndPassword(auth, creds.email, creds.password);
  };
  
  // register
  export const register = async (creds) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        creds.email,
        creds.password
      );
      if (res.user) {
        await updateProfile(res.user, { displayName: creds.username });
        await createUser({ ...creds, uid: res.user.uid });
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  // logout
  export const logout = async () => {
    return await signOut(auth);
  };