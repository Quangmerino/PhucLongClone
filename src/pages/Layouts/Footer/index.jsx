import { info } from "./data";
import ButtonCustom from "../../../components/ButtonComponent";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../components/ButtonComponent";
import accuracyImg from "./images/accuracy.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 py-8 px-28">
        <div>
          {info.map((item, index) => {
            return (
              <p>
                <label className="font-bold">{item.label} </label>
                {item.description}
              </p>
            );
          })}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <span className="font-bold">Đăng ký nhận tin khuyến mãi</span>
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="Nhập địa chỉ email"
                className="py-1 px-4 border text-black border-green-700 outline-none rounded-md"
              />
              <ButtonCustom
                name="GỬI"
                className="uppercase text-green-700 rounded-md border-green-700 border py-1 px-3"
              />
            </div>
            <ul>
              <li>
                <Link to="/">Chính sách đặt hàng</Link>
              </li>
              <li>
                <Link to="/">Chính sách bảo mật thông tin</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-end">
            <div className="flex items-center">
              <ButtonComponent
                className="border-r-2 border-green-700 pr-2 text-green-700"
                name="VN"
              />
              <ButtonComponent className="pl-2" name="EN" />
            </div>
            <Link to='/'>
                <img className="w-[200px]" src={accuracyImg} alt="" />
            </Link>
            <div className="flex gap-4">
              <Link to="/">
                <FacebookIcon className="hover:opacity-60" />
              </Link>
              <Link to="/">
                <TwitterIcon className="hover:opacity-60" />
              </Link>
              <Link to="/">
                <InstagramIcon className="hover:opacity-60" />
              </Link>
              <Link to="/">
                <YouTubeIcon className="hover:opacity-60" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex justify-center py-1">
        <span className="text-gray-400">
          © 2017 Bản quyền Phuc Long Co., Ltd
        </span>
      </div>
    </>
  );
}
