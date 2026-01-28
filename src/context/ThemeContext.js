"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Check local storage for saved theme or check system preference
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            // Default to light since the design was originally light
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
