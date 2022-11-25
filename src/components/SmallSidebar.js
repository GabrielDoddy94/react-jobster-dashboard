import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { toggleSidebar } from "../features/user/userSlice";

import Wrapper from "../assets/wrappers/SmallSidebar";
import { Logo, NavLinks } from "./";

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
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
