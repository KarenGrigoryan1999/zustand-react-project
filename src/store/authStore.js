import { create } from "zustand";

const useAuthStore = create((set) => ({
    token: null,
    userData: null,
    setToken: (newToken) => set({ token: newToken }),
    setUserData: (data) => set({ userData: data }),
}));

export default useAuthStore;