import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { toggleSidebar } from "../features/user/userSlice";
import links from "../utils/links";

import Wrapper from "../assets/wrappers/SmallSidebar";
import { Logo } from "./";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector(store => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map(link => {
              const { text, path, id, icon } = link;

              return (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}
                  onClick={toggle}
                  end
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
