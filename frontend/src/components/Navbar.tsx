import {useEffect} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import {Avatar, Tooltip} from '@chakra-ui/react';
import ReactSwitch from "react-switch";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useStateContext } from "../context/ContextProvider";

import { UserProfile } from "./UserProfile";

export const Navbar = (): JSX.Element => {
  const {
    theme,
    toggleTheme,
    activeMenu,
    setActiveMenu,
    screenSize,
    isClicked,
    handleClick,
    setScreenSize
  } = useStateContext();
  const { user } = useAuthenticatedUser();

  const handleCloseSideBar = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize! <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between md:ml-6 md:mr-6 relative">
      <Tooltip label="Menu">
        <button
          type="button"
          onClick={handleCloseSideBar}
          style={{ color: "rgba(55, 81, 255, 1)" }}
          className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
          <AiOutlineMenu />
        </button>
      </Tooltip>
      <div className="flex">
        <div className="mt-3 mr-2">
          <ReactSwitch
            checked={theme === "dark"}
            onColor="#3e403f"
            uncheckedIcon={false}
            checkedIcon={false}
            checkedHandleIcon={
              <FaMoon className="w-8 h-5 text-blue-800 pr-1.5 mt-1" />
            }
            uncheckedHandleIcon={
              <FaSun className="w-8 h-5 text-amber-500 pr-1.5 mt-1" />
            }
            offColor="#facd39"
            onChange={toggleTheme}
          />
        </div>

        <div
          className="flex items-center gap-2 cursor-pointer p-1 dark:hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("userProfile")}
        >
          <p>
            <span className="text-gray-400 text-14">Hi,</span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">
              {user!.name}
            </span>
          </p>
          <Avatar name = {user!.name.substring(0, 2)}/>
          <MdKeyboardArrowDown className="text-gray-400" />
        </div>

        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};
