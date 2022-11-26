import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';

interface Props {
  initalName: string;
  nameUser: string;
  typeUser: string;
}

const Avatar = ({ initalName, nameUser, typeUser }: Props) => (
  <section className="flex  justify-between ">
    <div className="flex">
      <div className="bg-blue-400 rounded-[50%] w-10 h-10  text-center flex justify-center items-center mr-3 ">
        {initalName}
      </div>
      <div className="flex flex-col">
        <span className="font-inter font-semibold text-[14px] leading-5 text-roxo800">
          {nameUser}
        </span>
        <span className="font-inter font-normal text-[14px] leading-5 text-gray-500">
          {typeUser}
        </span>
      </div>
    </div>
    <button type="submit">
      <LogoutIcon style={{ color: '#3a0136', height: '24px', width: '21px' }} />
    </button>
  </section>
);

export default Avatar;
