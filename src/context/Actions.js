import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { getUser, getUsers } from "../services/chatServices";
import { logout } from "../services/authServices";

export const signIn = ({ auth, user }) => {
  return { type: "LOGIN", payload: { auth, user } };
};

export const signOut = () => {
  return { type: "LOGOUT" };
};

export const updateProfile = (user) => {
  return { type: "UPDATE_USER", payload: user };
};

export const loadUsers = (users) => {
  return { type: "LOAD_USERS", payload: users };
};

export const chechAuthUser = (dispatch) => {
  return onAuthStateChanged(auth, async (authUser) => {
    if (authUser) {
      const user_res = await getUser(authUser.uid);
      const users_res = await getUsers(authUser);
      if (user_res) {
        dispatch(signIn({ auth: authUser, user: user_res }));
      }
      if (users_res) {
        dispatch(loadUsers(users_res));
      }
    } else {
      // no user, logout...
      await logout();
    }
  });
};