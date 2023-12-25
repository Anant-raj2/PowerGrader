import React, { createContext, useContext, useState } from 'react';

const Context = createContext<ContextType>({} as ContextType);

type ContextProviderProps = {
    children: React.ReactNode;
}
export type Theme = 'light' | 'dark';

type ContextType = {
    theme: Theme,
    toggleTheme: (e: any) => void,
    handleClick: (clicked: any) => void,
    screenSize?: number | undefined,
    setScreenSize: React.Dispatch<React.SetStateAction<number>>
    activeMenu: boolean;
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
    isClicked: { userProfile: boolean };
    setIsClicked: React.Dispatch<React.SetStateAction<{ userProfile: boolean }>>;
    userProfile: boolean,
}

export default function ContextProvider({ children }: ContextProviderProps){
  let currentTheme = localStorage.getItem('theme') as Theme;
  const [screenSize, setScreenSize] = useState(4);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState({ userProfile: false });
  const [theme, setTheme] = useState<Theme>(currentTheme || 'light');

  const toggleTheme = (e:Theme) => {
    if(localStorage.getItem('theme') === 'light'){
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }else if(localStorage.getItem('theme') === 'dark'){
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };
  
    const handleClick = (clicked: any) => setIsClicked({ ...{userProfile: false}, [clicked]: true });

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


    return( 
        <Context.Provider value={contextValue}> 
            {children} 
        </Context.Provider>
        );
}

export const useStateContext = () => useContext(Context);