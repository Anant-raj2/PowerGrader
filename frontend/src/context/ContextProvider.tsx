import React, { createContext, useContext, useState } from "react";

const Context = createContext<ContextType>({} as ContextType);

type ContextProviderProps = {
  children: React.ReactNode;
};
export type Theme = "light" | "dark";

type ContextType = {
  theme: Theme;
  toggleTheme: (e: Theme) => void;
  handleClick: (clicked: any) => void;
  screenSize?: number | undefined;
  setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isClicked: { userProfile: boolean };
  setIsClicked: React.Dispatch<React.SetStateAction<{ userProfile: boolean }>>;
  userProfile: boolean;
};

export default function ContextProvider({ children }: ContextProviderProps) {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState({ userProfile: false });
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = (e: Theme) => {
    setTheme(e as Theme);
    localStorage.setItem("theme", e);
  };

  const handleClick = (clicked: any) =>
    setIsClicked({ ...{ userProfile: false }, [clicked]: true });

  const contextValue: ContextType = {
    theme,
    toggleTheme,
    screenSize,
    setScreenSize,
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    userProfile: false,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export const useStateContext = () => useContext(Context);
