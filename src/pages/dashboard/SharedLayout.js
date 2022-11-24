import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <h1>SharedLayout</h1>
      <h1>{<Outlet />}</h1>
    </>
  );
};

export default SharedLayout;
