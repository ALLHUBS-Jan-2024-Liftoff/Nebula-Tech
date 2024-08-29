import React, { createContext, useContext, useState } from 'react';
import axios from './axiosConfig'; ; // Import your Axios configuration

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (loginData) => {
    axios.post('/api/public/login', loginData)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("Login failed", error);
      });
  };

  const logout = () => {
    axios.post('/api/public/logout')
      .then(() => {
        setUser(null);
      })
      .catch(error => {
        console.error("Logout failed", error);
      });
  };

  const checkLoginStatus = () => {
    axios.get('/api/public/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(() => {
        setUser(null);
      });
  };

  return (
    <UserContext.Provider value={{ user, login, logout, checkLoginStatus }}>
      {children}
    </UserContext.Provider>
  );
};
