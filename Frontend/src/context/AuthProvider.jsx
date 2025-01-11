import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // children is the component that is wrapped inside the AuthProvider like navbar, footer, etc.
  const intialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    intialAuthUser ? JSON.parse(intialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // This is a custom hook to use the AuthContext in any component that is wrapped inside the AuthProvider component.
export default AuthProvider;
