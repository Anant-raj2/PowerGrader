import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import useAuthenticatedUser from '../hooks/useAuthenticatedUser';

export const Navbar = (): JSX.Element => {
  const {user} = useAuthenticatedUser();

  return (
    <div className="flex justify-between md:ml-6 md:mr-6 relative">
        <button
          type="button"
          onClick={() => {}}
          style={{ color: "rgba(55, 81, 255, 1)" }}
          className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
          <AiOutlineMenu/>
        </button>
      <div className='flex'>
            <div
              className="flex items-center gap-2 cursor-pointer p-1 dark:hover:bg-light-gray rounded-lg"
              onClick={() => {}}
            >
              <p>
                <span className="text-gray-400 text-14">Hi,</span>{' '}
                <span className="text-gray-400 font-bold ml-1 text-14">
                  {user!.name}
                </span>
              </p>
            </div>
      </div>
    </div>
  )
}
