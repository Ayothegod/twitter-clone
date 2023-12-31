/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { usersData } from '../../utils/mockData'

const user = {
    "id": "1",
    "username": "user1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "bio": "Software Developer",
    "location": "Cityville",
    "website": "http://www.johndoe.com"
  }

export const useActionStore = create((set) => ({
    openSidebar: false,
    isSettingsDropdown: false,
    authVariant: false,
    user: user,
    updateOpenSidebar: () => set((state) => ({ openSidebar: !state.openSidebar })),
    updateAuthVariant: () => set((state) => ({ authVariant: !state.authVariant })),
    updateIsSettingsDropdown: () => set((state) => ({ isSettingsDropdown: !state.isSettingsDropdown })),
    // removeAllBears: () => set({ bears: 0 }),
  }))
  
