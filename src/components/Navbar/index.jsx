import { Link } from "react-router-dom";
import { navigations } from "../../data";
import { SearchOutlined } from "@ant-design/icons";
import ButtonCustom from "../ButtonComponent";

// import 'antd/dist/antd.css';
function Navigation() {
  return (
    <div 
      className="hidden items-center justify-center border-y-2 border-gray-200 md:flex"
    >
      <ul className="flex py-2 justify-center">
        {navigations.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className="uppercase py-2 px-2 font-bold md:text-[15px] hover:text-green-700 focus:text-green-700 lg:px-4 xl:px-8"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <ButtonCustom
          className="flex items-center p-1"
          icon={<SearchOutlined style={{ fontSize: "18px" }} />}
        />
      </div>
    </div>
  );
}

function NavigationMobile() {
  return (
    <ul className="flex flex-col md:hidden gap-3 py-6 pl-3">
      {navigations.map((item, index) => {
        return (
          <li key={index}>
            <Link
              to={item.path}
              className="uppercase py-2 font-bold text-[16px] hover:text-green-700 focus:text-green-700"
            >
              {item.name}
            </Link>
          </li>
        );
      })}
      <div className="flex flex-col items-start gap-4">
        <ButtonCustom
          className="border-green-700 text-green-700 border rounded-md px-2"
          name="VN"
        />
        <ButtonCustom className="border-gray-400 border rounded-md px-2" name="EN" />
      </div>
    </ul>
  );
}

export { Navigation, NavigationMobile };
