import { Link } from "react-router-dom";
import ButtonCustom from "../../../components/ButtonComponent";
import ButtonComponent from "../../../components/ButtonComponent";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { info } from "../../../data";

export default function Footer() {
  return (
    <>
      <div className="relative grid grid-cols-1 gap-10 py-8 px-3 md:px-10 lg:grid-cols-3 xl:px-20">
        <div>
          {info.map((item, index) => {
            return (
              <p key={index}>
                <label className="font-bold">{item.label} </label>
                {item.description}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col lg:pl-20 gap-4">
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
              <Link to="/chinh-sach-dat-hang">Chính sách đặt hàng</Link>
            </li>
            <li>
              <Link to="/chinh-sach-bao-mat-thong-tin">
                Chính sách bảo mật thông tin
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between flex-row gap-4 md:flex-col md:items-start md:justify-start lg:items-end">
          <div className="flex items-center">
            <ButtonComponent
              className="border-r-2 border-green-700 pr-2 text-green-700"
              name="VN"
            />
            <ButtonComponent className="pl-2" name="EN" />
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/Ph%C3%BAc-Long-Coffee-Tea-101556229353982/?ref=pages_you_manage">
              <FacebookOutlined
                className="hover:opacity-60"
                style={{ fontSize: "20px" }}
              />
            </a>
            <a href="/">
              <TwitterOutlined
                className="hover:opacity-60"
                style={{ fontSize: "20px" }}
              />
            </a>
            <a href="https://www.instagram.com/phuclongcoffeeandtea/">
              <InstagramOutlined
                className="hover:opacity-60"
                style={{ fontSize: "20px" }}
              />
            </a>
            <a href="https://www.youtube.com/channel/UCq6WR0wWNUuz53c4zeWSa8g">
              <YoutubeOutlined
                className="hover:opacity-60"
                style={{ fontSize: "20px" }}
              />
            </a>
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
