import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
    'checking' = 'checking',
    'auth' = 'auth',
    'no auth' = 'no auth',
}

interface AuthState {
    status: AuthStatus;
    token?: string;
    usuario?: User;
    isChecking: boolean;
}

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthState);


export const useAuthContext = () => useContext(AuthContext);


export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [status, setstatus] = useState(AuthStatus.checking);
    useEffect(() => {
        setTimeout(() => {
            setstatus(AuthStatus.auth);
        }, 3000);
    }, [])

    return (
        <AuthContext.Provider value={{ status, isChecking: status === AuthStatus.checking, }}>
            {children}
        </AuthContext.Provider>)
}