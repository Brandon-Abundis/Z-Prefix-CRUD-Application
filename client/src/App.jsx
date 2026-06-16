// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './mainPage/Home';
import { InventoryContext } from './contexts/InventoryContext';

import useFetchAllUsers from './customHooks/useFetchAllUsers';
import useFetchItemsByUsers from './customHooks/useFetchItemsByUsers';

function App() {
  // const [refreshCount, setRefreshCount] = useState(0); // useFetchItemsByUsers(refreshCount);
  // use this in context and set it when a user registors.

  const { users } = useFetchAllUsers();
  const { allInventories } = useFetchItemsByUsers();


  if(!users || !allInventories) return <div>Loading data</div>;

  return (
    <InventoryContext.Provider value={{users, allInventories}}>

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

      <section id="spacer"></section>
    </InventoryContext.Provider>
  )
}

export default App
