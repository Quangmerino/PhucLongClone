import { Link } from "react-router-dom";
import { navigations } from "../../data";
import { SearchOutlined } from "@ant-design/icons";
import ButtonCustom from "../ButtonComponent";

// import 'antd/dist/antd.css';
function Navigation() {
  return (
    <div 
      className="hidden items-center justify-center border-y-2 border-gray-200 md:flex xl:gap-8"
    >
      <ul className="flex py-2 justify-center">
        {navigations.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className="uppercase py-2 font-bold text-[16px] hover:text-green-700 focus:text-green-700 lg:px-8"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <ButtonCustom
          className="flex items-center"
          icon={<SearchOutlined style={{ fontSize: "20px" }} />}
        />
      </div>
    </div>
  );
}

function NavigationMobile() {
  return (
    <ul className="flex flex-col md:hidden gap-3 py-6 px-8">
      {navigations.map((item, index) => {
        return (
          <li key={index}>
            <Link
              to={item.path}
              className="uppercase py-2 px-8 font-bold text-[16px] hover:text-green-700 focus:text-green-700"
            >
              {item.name}
            </Link>
          </li>
        );
      })}
      <div className="flex items-center ml-8">
        <ButtonCustom
          className="border-r-2 border-green-700 pr-2 text-green-700"
          name="VN"
        />
        <ButtonCustom className="pl-2" name="EN" />
      </div>
    </ul>
  );
}

export { Navigation, NavigationMobile };
