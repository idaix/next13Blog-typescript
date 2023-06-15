import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    isDark && document.body.classList.add("dark");
    !isDark && document.body.classList.remove("dark");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    !isDark
      ? localStorage.setItem("theme", "dark")
      : localStorage.removeItem("theme");
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
