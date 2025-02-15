import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/docteur">Docteur</Link>
        <Link to="/patient">Patient</Link>
        <Link to="/acte">Acte</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Layout;
