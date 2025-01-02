import { create, StateCreator } from "zustand";
import { persist, devtools } from "zustand/middleware";

import storage from "@/utils/storage";

type User = {
  name: string;
}

export interface AuthState {
  getToken: () => string | undefined;
  setToken: (token: string) => void;
  user?: User;
}

const storeApi: StateCreator<AuthState> = (set) => ({
  getToken: () => storage.getString('token'),
  setToken: (token) => storage.set('token', token),
  user: undefined,
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      storeApi, { name: "auth-storage" }
    ))
);