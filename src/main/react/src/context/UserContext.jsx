import React, { createContext, useContext, useState } from 'react';
import axios from '../axiosConfig'; // Import your Axios configuration

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to handle user login
  const login = (loginData) => {
    axios.post('/api/public/login', loginData)
      .then(response => {
        setUser(response.data); // Set user data from response
      })
      .catch(error => {
        console.error("Login failed", error);
      });
  };

  // Function to handle user logout
  const logout = () => {
    axios.post('/api/public/logout')
      .then(() => {
        setUser(null); // Clear user data on logout
      })
      .catch(error => {
        console.error("Logout failed", error);
      });
  };

  // Function to check if the user is already logged in
  const checkLoginStatus = () => {
    axios.get('/api/public/user')
      .then(response => {
        setUser(response.data); // Set user data from response if logged in
      })
      .catch(() => {
        setUser(null); // User not logged in
      });
  };

  return (
    <UserContext.Provider value={{ user, login, logout, checkLoginStatus }}>
      {children}
    </UserContext.Provider>
  );
};
