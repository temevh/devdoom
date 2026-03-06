"use client";
import { useEffect } from "react";
import { useUserStore } from "@/store/UserStore";
import { GetUser } from "@/app/api/user";
import { useQuery } from "@tanstack/react-query";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { setUser, setLoading, isLoading: storeLoading } = useUserStore();
  const { data: userData, isLoading: queryLoading, isSuccess } = useQuery({
    queryKey: ["user"], queryFn: GetUser, enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
    select: (res) => res.data,
  })

  useEffect(() => {
    console.log("flg 1")
    if (isSuccess && userData) {
      setUser(userData)
      setLoading(false)
    }
  }, [userData, isSuccess, setUser, setLoading]);

  if (queryLoading || storeLoading) {
    return <p>LOADING.. ADD FULLSCREEN LOADER</p>;
  }

  return <>{children}</>;
};
