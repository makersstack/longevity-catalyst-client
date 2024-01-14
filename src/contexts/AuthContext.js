import { createContext, useCallback, useEffect, useState } from 'react';
import { authApi } from '../api';
import { authKey } from '../constants/storageKey';
import { removeUserInfo } from '../services/auth.service';
import { logoutRequest } from '../services/logout.service';
import { decodedToken } from '../utils/jwt';
import { getLocalStorage, setToLocalStorage } from '../utils/local-storage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    const fetchUserInfo = useCallback(async (accessToken) => {
        const { userId } = decodedToken(accessToken);
        const response = await authApi.getUserProfile(userId);
        setUserInfo(response.data.data);
    }, []);

    const handleLoginSuccess = useCallback(({ accessToken }) => {
        setIsLoggedIn(true);
        setToLocalStorage(authKey, accessToken);
        fetchUserInfo(accessToken);
    }, [fetchUserInfo]);

    const handleLogout = useCallback(async () => {
        logoutRequest();
        setIsLoggedIn(false);
        removeUserInfo(authKey);
        setUserInfo(null);
    }, []);

    useEffect(() => {
        const accessToken = getLocalStorage(authKey);
        if (accessToken) {
            fetchUserInfo(accessToken);
            setIsLoggedIn(true);
        } else {
            setUserInfo(null);
            setIsLoggedIn(false);
        }
    }, [fetchUserInfo]);

    const authContextValue = {
        isLoggedIn,
        handleLoginSuccess,
        handleLogout,
        userInfo,
        setUserInfo
    };

    return (
        <AuthContext.Provider value={authContextValue} >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;