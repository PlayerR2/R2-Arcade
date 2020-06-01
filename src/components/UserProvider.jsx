import React, { createContext, useState, useEffect } from "react";
import { auth, generateUserDocument } from "../firebase";

export const UserContext = createContext({ user: null });

export default function UserProvider(props) {
  const [user, setUser] = useState({ user: null });

  const onAuthStateChange = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      setUser({ user });
      console.log("In the onAuthStateChange -->", user ? user.uid : "undefined")
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}
