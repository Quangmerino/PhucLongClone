import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Breadcrumbs(props) {
  const {breadcrumbs} = props;
  return (
      <ul class="flex justify-center items-center my-4 text-[18px] gap-2">
        <li className="text-gray-400 hover:text-red-500">
          <Link to='/'>Home</Link>
        </li>
        <RightOutlined style={{fontSize:'12px'}}/>
        <li className="text-gray-600 hover:text-red-500">
          <Link to=''>
            {breadcrumbs}
          </Link>
        </li>
      </ul>
  );
}
