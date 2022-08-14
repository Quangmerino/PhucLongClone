import { Link } from "react-router-dom";
import navigations from "./navigations";
import { Button, Popover } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import 'antd/dist/antd.css';

export default function Navigation() {
  const PopoverSearch = (
    <ul className="z-50 flex flex-col gap-4 p-4 bg-white rounded-sm shadow-2xl w-[200px]">
      <li>
        <Link to="/">Sản phẩm trà</Link>
      </li>
      <li>
        <Link to="/">Sản phẩm cà phê</Link>
      </li>
    </ul>
  );
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
      <div>
        <Popover
          placement="bottomRight"
          content={PopoverSearch}
          trigger="hover"
        >
          <Button className="flex items-center">
            <SearchOutlined style={{ fontSize: "20px" }} />
          </Button>
        </Popover>
      </div>
    </div>
  );
}
