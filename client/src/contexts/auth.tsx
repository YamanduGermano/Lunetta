import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth, db } from "../../App";

import *  as fireauth from 'firebase/auth'
import { get, ref, set } from "firebase/database";
import { clockRunning } from "react-native-reanimated";

interface UserData {
  name: string;
  email: string;
  city?: string;
  uf?: string;
  age?: string;
  school?: string;
  serie?: string;
  about: string;
  pfp: number;
  isInstit?: boolean;
  interesses?: object;
}

interface AuthContextData {
  signed: boolean,
  user: UserData | null,
  signOut(): void,
  signIn(email: string, password: string): Promise<void>,
  signUp(email: string, password: string, name: string): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<UserData|null>(null);

  const signOut = () => {
    fireauth.signOut(auth);
  }

  const signIn = async (email:string, password:string) => {
    email = email.trim();
    password = password.trim();
    signInWithEmailAndPassword(auth, email, password)
      .catch(err => console.log(err))
  }

  const signUp = async(email: string, password: string, name: string) => {
    fireauth.createUserWithEmailAndPassword(auth, email.trim(), password.trim())
      .then((userData) => {
        const dbRef = ref(db, '/users/'+userData.user.uid);
        set(dbRef, {
          name,
          about: "Olá! Sou um usuário do Lunetta!",
          pfp: 1
        });
      })
      .catch(err => console.log(err));
  }

  onAuthStateChanged(auth, (userData) => {
		if (userData) {
			// setUser(userData);
      if(user !== null) return;
      const dbRef = ref(db, '/users/'+userData.uid);
        get(dbRef)
          .then(data => {
            setUser(data.val());
          })
		} else {
			setUser(null);
		}
	});

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signOut, signIn, signUp}}>
      {children}
    </AuthContext.Provider>
  )    
};

export default AuthContext;