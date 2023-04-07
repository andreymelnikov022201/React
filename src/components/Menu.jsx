import { NavLink } from "react-router-dom";
import { categories } from "./Products";

   const Menu = () => {
    return (
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink to={`animal/${category.id}`} style={setActive}>
              {category.name || "All"}
            </NavLink>
          </li>
        ))}
        
        <NavLink to={`admin`} style={setActive}>
          {"Panel"}
        </NavLink>
      
      </ul>
    );
        }
  export const setActive = ({ isActive }) =>
    isActive ? { color: "blue" } : { color: "black" };
    
export default Menu;
