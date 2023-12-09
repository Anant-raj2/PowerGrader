import "../../../App.css";
import useAuthenticatedUser from "../../../hooks/useAuthenticatedUser";
import * as UserApi from "../../../networks/api/user_api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const StudentDashboard = (): JSX.Element => {
  const { user } = useAuthenticatedUser();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(user);
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, []);

  async function logout() {
    await UserApi.logout();
    navigate("/login");
  }

  async function getUserInfo() {
    // const stringifiedUserInfo = JSON.stringify(userInfo);
    if(!userInfo) {
      return;
    }
    console.log(userInfo);
  }
  return <div>
    <button className="absolute w-[388px] h-[48px] all-[unset] cursor-pointer box-border">
                  <div className="relative h-[48px] rounded-[8px]">
                    <div className="w-[388px] h-[48px] top-0 bg-[#3751ff] rounded-[8px] shadow-button-accent-default absolute left-0" />
                      <button onClick={logout} className="absolute w-[340px] top-[14px] left-[24px] font-semibold-14px font-[number:var(--semibold-14px-font-weight)] text-grayscale-white text-[length:var(--semibold-14px-font-size)] text-center tracking-[var(--semibold-14px-letter-spacing)] leading-[var(--semibold-14px-line-height)] [font-style:var(--semibold-14px-font-style)] all-[unset] box-border">
                        Log Out
                      </button>
                  </div>
      </button>

      <button className="absolute w-[388px] top-[100px] h-[48px] all-[unset] cursor-pointer box-border">
                  <div className="relative h-[48px] rounded-[8px]">
                    <div className="w-[388px] h-[48px] top-0 bg-[#3751ff] rounded-[8px] shadow-button-accent-default absolute left-0" />
                      <button onClick={getUserInfo} className="absolute w-[340px] top-[14px] left-[24px] font-semibold-14px font-[number:var(--semibold-14px-font-weight)] text-grayscale-white text-[length:var(--semibold-14px-font-size)] text-center tracking-[var(--semibold-14px-letter-spacing)] leading-[var(--semibold-14px-line-height)] [font-style:var(--semibold-14px-font-style)] all-[unset] box-border">
                        Get Info
                      </button>
                  </div>
      </button>
  </div>;
};
