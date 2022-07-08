import React from 'react';
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src='https://th.bing.com/th/id/R.56f267abaa1a24741d4a3b231610e984?rik=srdnyYyJU%2fAHxg&riu=http%3a%2f%2fimgs.tom.com%2ffinance%2f202101%2f1640408355%2fCONTENT202010157a845ebd14a8f017700x5000.jpg&ehk=MQ2AVXZZUENKL8PckQMljhvFSv%2fkQf1mnKkNBWyeXW4%3d&risl=&pid=ImgRaw&r=0'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-full'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>Mis Favoritos</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;