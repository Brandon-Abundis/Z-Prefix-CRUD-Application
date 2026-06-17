import { createContext } from 'react';

export const InventoryContext = createContext({
  users: [],
  currentUser: null,
  setCurrentUser: () => {}, // this looks crazy, but it only likes this.
});
