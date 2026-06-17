// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './mainPage/Home';
import { InventoryContext } from './contexts/InventoryContext';

import useFetchAllUsers from './customHooks/useFetchAllUsers';
import useFetchItemsByUsers from './customHooks/useFetchItemsByUsers';

import NavBar from './mainPage/NavBar';
import LoginPage from './authPage/LoginPage';
import RegisterPage from './authPage/RegisterPage';

function App() {
  // const [refreshCount, setRefreshCount] = useState(0); // useFetchItemsByUsers(refreshCount);
  // use this in context and set it when a user registors.
  const [user, setUser] = useState(null);

  const { users } = useFetchAllUsers();
  const { allInventories } = useFetchItemsByUsers();

  useEffect(() => {
    async function restoreSession() { // need to put this in a seperate file.
      try {
        const res = await fetch('http://localhost:8080/auth/me', {
          method: 'GET',
          credentials: 'include'
        });

        if (res.ok) {
          const currentUser = await res.json();
          setUser(currentUser);
        }
      } catch (error) {
        console.error('Session restore failed:', error);
      }
    }

    restoreSession();
  }, []);

  if(!users || !allInventories) return <div>Loading data</div>;

  return (
    <InventoryContext.Provider value={{users, allInventories, user, setUser, setCurrentUser: setUser}}>

      <NavBar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>

      <section id="spacer"></section>
    </InventoryContext.Provider>
  )
}

export default App
