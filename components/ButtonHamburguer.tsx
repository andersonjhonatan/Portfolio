import React, { useContext, useState } from 'react'
import { ScrollContext } from './Main';

type Props = {}

const ButtonHamburguer = (props: Props) => {
const {show, handleClick} = useContext(ScrollContext);
  const genericHamburgerLine = `h-1 w-1 my-1 rounded-full bg-white text-white transition ease transform duration-300`;

  const handleButtonClick = () => {
    handleClick();
  };

  return (
    <button
    className='grid grid-cols-3 h-10 w-10 text-white rounded justify-center items-center group ipad:hidden'
    onClick={handleButtonClick}
  >
    <div
      className={`${genericHamburgerLine} ${
        show
          ? 'rotate-45 translate-y-3 text-white group-hover:opacity-100'
          : 'text-white group-hover:opacity-100'
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        show ? 'opacity-0' : 'text-white group-hover:opacity-100'
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        show
          ? '-rotate-45 -translate-y-3 text-white group-hover:opacity-100'
          : 'text-white group-hover:opacity-100'
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        show
          ? 'rotate-45 translate-y-3 text-white group-hover:opacity-100'
          : 'text-white group-hover:opacity-100'
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        show ? 'opacity-0' : 'text-white group-hover:opacity-100'
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        show
          ? '-rotate-45 -translate-y-3 text-white group-hover:opacity-100'
          : 'text-white group-hover:opacity-100'
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        show
          ? 'rotate-45 translate-y-3 text-white group-hover:opacity-100'
          : 'text-white group-hover:opacity-100'
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        show ? 'opacity-0' : 'text-white group-hover:opacity-100'
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        show
          ? '-rotate-45 -translate-y-3 text-white group-hover:opacity-100'
          : 'text-white group-hover:opacity-100'
      }`}
    />
  </button>
  )
}

export default ButtonHamburguer;