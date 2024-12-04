import React, { useState } from "react";
import sidebarItems from "./sidebarItems.json";
import pages from './pages.json';

const SideBar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleSubMenu = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <>
      <aside id="sidebar-multi-level-sidebar" className="fixed z-40 w-[300px] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-8 py-4 overflow-y-auto bg-white shadow-lg">
          <ul className="space-y-2 font-medium">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-lg text-sidebar-text transition duration-75 rounded-lg group hover:bg-white hover:text-sidebar-hover"
                  aria-controls={`dropdown-example-${index}`}
                  data-collapse-toggle={`dropdown-example-${index}`}
                  onClick={() => toggleSubMenu(index)}
                >
                  <i className={item.icon}></i>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{item.title}</span>
                  {item.subItems && <i className="bi bi-chevron-down"></i>}
                </button>
                <ul id={`dropdown-example-${index}`} className={`${activeItem === index ? '' : 'hidden'} py-2 space-y-2`}>
                  {item.subItems && item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.link}
                        className="flex items-center w-full p-2 text-sidebar-text transition duration-75 rounded-lg pl-11 group hover:bg-white hover:text-sidebar-hover"
                      >
                        {subItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="text-xs uppercase text-gray-500 font-semibold">
              Pages
            </li>
            {pages.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="text-lg flex items-center p-2 text-sidebar-text rounded-lg hover:bg-white hover:text-sidebar-hover group">
                  <i className={item.icon}></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;