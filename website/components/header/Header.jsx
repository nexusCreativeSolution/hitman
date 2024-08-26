'use client';
import { useState } from 'react';
import HeaderLinks from './HeaderLinks';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='fixed z-50 w-full transition-all duration-300 bg-white shadow-md '>
      <div className='container px-4 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Logo />
          <HeaderLinks />
          <div className='md:hidden'>
            <MenuIcon toggleMenu={toggleMenu} isOpen={isOpen} />
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
