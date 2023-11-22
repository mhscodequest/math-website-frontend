import { Outlet, Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Outlet />
    </>
  )
}

export default Layout;