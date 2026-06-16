// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './mainPage/Home';
import { InventoryContext } from './contexts/InventoryContext';

import useFetchAllUsers from './customHooks/useFetchAllUsers';

function App() {
  const { users } = useFetchAllUsers();

  if(!users) return <div>Loading users</div>;

  return (
    <InventoryContext.Provider value={{users}}>

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

      <section id="spacer"></section>
    </InventoryContext.Provider>
  )
}

export default App
