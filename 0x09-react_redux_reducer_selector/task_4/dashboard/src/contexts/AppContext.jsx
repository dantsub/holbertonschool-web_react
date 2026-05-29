import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
    user: {
        email: null,
        isLoggedIn: false,
    },
    logIn: () => void(0),
    logOut: () => void(0)
});

export function AuthProvider({ children}) {
    const [user, setUser] = useState({
        email: null,
        isLoggedIn: false
    });

    const logIn = (email, password) => {
        if (!(email && password)) return;
        setUser({ email, isLoggedIn: true })
    };

    const logOut = () => setUser({ email: null, isLoggedIn: false });

    return (
        <AuthContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}