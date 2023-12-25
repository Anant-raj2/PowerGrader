import React from "react";
import { ButtonContained } from "../components/index";
import * as User from "../networks/api/user_api";
import { useNavigate } from "react-router-dom";
import { useStateContext, Theme } from "../context/ContextProvider";
import ReactSwitch from "react-switch";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

export const Overview = (): JSX.Element => {
  const { theme, toggleTheme } = useStateContext();
  const navigate = useNavigate();
  const logout = () => {
    User.logout();
    navigate("/login");
    window.location.reload();
  };
  return (
    <>
      <div className="mt-24">
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div>
              <p className="font-bold text-gray-400">GPA:</p>
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div>
              <p className="font-bold text-gray-400">Weighted GPA:</p>
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div>
              <p className="font-bold text-gray-400">Class Rank:</p>
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div>
              <p className="font-bold text-gray-400">Rating:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
