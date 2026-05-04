"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        if (stored === "light" || stored === "dark") {
            setTheme(stored);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
        try {
            localStorage.setItem("theme", theme);
        } catch (e) {}
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
