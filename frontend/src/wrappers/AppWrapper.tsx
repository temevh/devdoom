"use client";
import { useEffect } from "react";
import { useUserStore } from "@/store/UserStore";
import { GetUser } from "@/app/api/user";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { setUser, setLoading, isLoading } = useUserStore();

  useEffect(() => {
    const initializeUser = async () => {
      console.log("🛠️ initializeUser started");
      const token = localStorage.getItem("token");
      console.log("🔑 Token found:", token ? "YES" : "NO");

      if (!token) {
        console.log("⚠️ No token, stopping initialization");
        setLoading(false);
        return;
      }

      try {
        console.log("📡 Sending request to backend...");
        const response = await GetUser();
        console.log("✅ Response received:", response.data);
        setUser(response.data);
      } catch (error: any) {
        console.error(
          "❌ Fetch failed:",
          error.response?.data || error.message,
        );
        localStorage.removeItem("token");
        setLoading(false);
      }
    };

    initializeUser();
  }, [setUser, setLoading]);

  if (isLoading) {
    return <p>LOADING.. ADD FULLSCREEN LOADER</p>;
  }

  return <>{children}</>;
};
