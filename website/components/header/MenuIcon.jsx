import React from 'react';

const MenuIcon = ({ toggleMenu, isOpen }) => {
  console.log('isOpen:', isOpen);
  return (
    <button
      onClick={toggleMenu}
      className='inline-flex items-center justify-center p-2 text-gray-800 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
    >
      <span className='sr-only'>Open main menu</span>
      {isOpen ? (
        <i className='fas fa-times'></i>
      ) : (
        <i className='fas fa-bars'></i>
      )}
    </button>
  );
};

export default MenuIcon;
