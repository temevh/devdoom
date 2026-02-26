"use client"
import { useEffect } from "react";
import { useUserStore } from "@/store/UserStore";
import { GetUser } from "@/app/api/user";

export const AppWrapper = ({children}: {children: React.ReactNode}) => {
    const {setUser, setLoading, isLoading} = useUserStore();

    useEffect(() => {
        const initializeUser = async () => {
            const token = localStorage.getItem('token');

            if (!token){
                setLoading(false)
                return;
            }

            try {
                const response   = await GetUser();
                console.log(response)
            } catch(error){
                console.error("Session expired");
                localStorage.removeItem('token')
                setLoading(false)
            }
        }

        initializeUser();

    }, [setUser, setLoading])

    if(isLoading){
        return <p>LOADING.. ADD FULLSCREEN LOADER</p>
    }

    return <>{children}</>


}