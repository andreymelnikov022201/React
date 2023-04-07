import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
function Root() {
  return (
    <div>
      <Header />
      <Menu />
      <Outlet />
    </div>
  );
}
export default Root;
