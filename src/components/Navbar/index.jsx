import { Link } from "react-router-dom";
import navigations from "./navigations";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ButtonComponent from "../ButtonComponent";

export default function Navigation() {
  return (
    <div className="flex items-center gap-8 justify-center border-y-2 border-gray-200">
      <ul className="flex py-2 justify-center">
        <li>
          {navigations.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
                className="uppercase py-2 px-8 font-bold hover:text-green-700"
              >
                {item.name}
              </Link>
            );
          })}
        </li>
      </ul>
      <div class="tooltip" data-tip="hello">
        <ButtonComponent 
          icon={<SearchOutlinedIcon />} 
        />
      </div>
    </div>
  );
}
