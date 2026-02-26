import { User } from "@/app/types";
import {create } from "zustand"

interface UserState {
    user: {email: string, topics: string[]} | null;
    isAuthenticated: boolean,
    isLoading: boolean;
    setUser: (user: User) => void;
    logOut: () => void;
    setLoading: (loading: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    setUser: (user) => set({user, isAuthenticated: !!user, isLoading: false}),
    logOut: () => {
        localStorage.removeItem('token');
        set({user: null, isAuthenticated: false, isLoading: false})
    },
    setLoading: (loading) => set({isLoading: loading})
}))