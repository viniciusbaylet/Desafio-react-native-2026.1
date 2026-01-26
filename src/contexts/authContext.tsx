import { createContext, PropsWithChildren, useState } from "react"

type AuthState = {
    isLoggedIn: boolean
    signIn: () => void
    signOut: () => void
}

export const AuthContext = createContext<AuthState>({} as AuthState);

export function AuthProvider({children}: PropsWithChildren) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function signIn() {
        setIsLoggedIn(true);
    }

    function signOut() {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}