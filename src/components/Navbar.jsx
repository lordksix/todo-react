import React, { useState, useRef } from "react";
import { useOnClickOutside } from "@/useOnClickOutside";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from '@/context/AuthContext';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  const { user, logout } = useAuthContext();
  const handleLogout = () => {
    logout();
    navigate('/login');
  }
  return (
    <>
      <nav className="navbar">
      <ul>
        {links.map((link) => {
          return (
            <React.Fragment key={link.text}>
            {link.path === 'login' ? (
              !user && (
                <li>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => isActive ? 'active' : undefined }
                  >
                      {link.text}
                  </NavLink>
                </li>
              )
            ) : link.path === 'profile' ? (
              user && (
                <li>
                  <NavLink to={link.path}>
                    {link.text}
                  </NavLink>
                </li>
              )
            ) : (
              <li>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => isActive ? 'active' : undefined }
                  >
                      {link.text}
                  </NavLink>
              </li>
            )}
          </React.Fragment>
          );
        })}
        <li ref={ref}>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
        {!user && (
          <li className="log-in">
            <span>Log in to edit to-dos</span>
          </li>
        )}
      </ul>
    </nav>
    {user && (
      <div className="logout">
        <p>{user}</p>
        {<button onClick={handleLogout}>Logout</button>}
      </div>
    )}
  </>
  );
};
export default Navbar;