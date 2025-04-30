import "./styles.css";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header-container">
        <div className="header-name">Github API</div>
      </header>
      <Outlet />
    </>
  );
}
