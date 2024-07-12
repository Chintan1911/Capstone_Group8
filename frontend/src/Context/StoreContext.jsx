import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [cartItems, setCartItems] = useState({});

    const loadTokenFromLocalStorage = () => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }
    };

    useEffect(() => {
        loadTokenFromLocalStorage();
    }, []);

    const loginUser = async (data) => {
        const response = await axios.post(url + "/api/user/login", data);
        if (response.data.success) {
            const receivedToken = response.data.token;
            setToken(receivedToken);
            localStorage.setItem("token", receivedToken);
        } else {
            throw new Error(response.data.message);
        }
    };

    const registerUser = async (data) => {
        const response = await axios.post(url + "/api/user/register", data);
        if (response.data.success) {
            const receivedToken = response.data.token;
            setToken(receivedToken);
            localStorage.setItem("token", receivedToken);
        } else {
            throw new Error(response.data.message);
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalAmount += cartItems[item];
            }
        }
        return totalAmount;
    };

    const contextValue = {
        url,
        token,
        setToken,
        loginUser,
        registerUser,
        getTotalCartAmount,
        cartItems,
        setCartItems,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
