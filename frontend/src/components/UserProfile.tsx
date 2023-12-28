import React from "react";

import { userProfileData } from "../data/dummy";
import { MdOutlineCancel } from "react-icons/md";
import Button from "./Button";
import * as User from "../networks/api/user_api";
import { useNavigate } from "react-router-dom";

export const UserProfile = (): JSX.Element => {
  const navigate = useNavigate();
  const logout = () => {
    User.logout();
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
          bgColor={""}
          text={""}
          width={""}
          onClick={() => {}}
        />
      </div>

      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Button
          color="white"
          text="Logout"
          borderRadius="10px"
          width="full"
          bgColor={"#3751FF"}
          bgHoverColor={""}
          size={""}
          onClick={logout}
        />
      </div>
    </div>
  );
};