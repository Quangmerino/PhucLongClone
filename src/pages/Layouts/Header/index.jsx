import ButtonComponent from "../../../components/ButtonComponent";
import {Navigation, NavigationMobile} from "../../../components/Navbar";
import SlideHeader from "./slide";
import { Link } from "react-router-dom";
import ButtonCustom from "../../../components/ButtonComponent";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 right-0 left-0 z-10 bg-white shadow-2xl">
      <div className="flex justify-between items-center py-4 h-[60px] md:h-[80px] px-3 sm:px-10 md:px-24 lg:px-28 xl:px-32 2xl:px-40">
        <ButtonCustom 
          className="flex sm:hidden"
          onClick={()=> setOpen(!open)}
          icon={<MenuOutlined style={{fontSize: '24px'}}/>}
        />
        <Link className="hidden md:flex" to="/">
          <img
            className="hover:motion-safe:animate-bounce"
            src="/images/delivery.png"
            alt="delivery"
          />
        </Link>
        <SlideHeader />
        <div className="flex items-center gap-4">
          <ButtonComponent
            className="flex items-center px-2 py-1 gap-2 border-2 rounded-md border-green-700 text-green-700"
            name="giỏ hàng"
            styleName="hidden lg:flex"
            icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
          />
          <ButtonComponent className="font-bold text-green-700" name="Đăng nhập" />
          <div className="hidden md:flex items-center">
            <ButtonComponent
              className="border-r-2 border-green-700 pr-2 text-green-700"
              name="VN"
            />
            <ButtonComponent className="pl-2" name="EN" />
          </div>
        </div>
      </div>
      {
        open ? <NavigationMobile /> : null
      }
      <Navigation/>
    </div>
  );
}
