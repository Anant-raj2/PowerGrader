import React from 'react'
import { ButtonContained } from '../components/index'
import * as User from '../networks/api/user_api'
import { useNavigate } from "react-router-dom";
import { useStateContext, Theme } from '../context/ContextProvider';
import ReactSwitch from 'react-switch';
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

export const Overview = (): JSX.Element => {
  const { theme, toggleTheme } = useStateContext();
  const navigate = useNavigate();
  const logout = () => {

    User.logout();
    navigate('/login');
    window.location.reload();
  }
  return (
    <>
      <form onSubmit={logout}>
        <h1 className='dark:text-white text-5xl'>
            Overview
        </h1>
        <ButtonContained
                btnLabelClassName="!tracking-[var(--semibold-14px-letter-spacing)] !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[340px]"
                className=" !bg-mainblue !w-[388px]"
                text="Log Out"
                type='submit'
        />
      </form>
    </>
  )
}
