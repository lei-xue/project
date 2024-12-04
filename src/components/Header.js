import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="left-4 y-0 mx-auto p-1">
          <a href="/" className="shadow-lg py-4 flex items-center rtl:space-x-reverse">
            <span className="self-center text-3xl pl-4 font-semibold whitespace-nowrap text-sidebar-text">Ascendcargo</span>
          </a>
        </div>
      </nav>
    </>
  )
}
export default Header;