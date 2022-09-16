import ButtonComponent from "../../../components/ButtonComponent";
import { Navigation, NavigationMobile } from "../../../components/Navbar";
import SlideHeader from "./slide";
import { Link } from "react-router-dom";
import ButtonCustom from "../../../components/ButtonComponent";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import ModalCustom from "../../../components/Modal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const dataForm = [
    {
      icon: "./svg/icon-personal.svg",
      label: "Sử dụng email / Số điện thoại",
    },
    {
      icon: "./svg/icon-google.svg",
      label: "Tiếp tục với Google",
    },
    {
      icon: "./svg/icon-facebook.svg",
      label: "Tiếp tục với Facebook",
    },
    // {
    //   icon: "password",
    //   label: "Tiếp tục với gmail",
    // },
    // {
    //   icon: "password",
    //   label: "Confirm password",
    // },
  ];

  return (
    <div className="fixed top-0 right-0 left-0 z-10 bg-white shadow-2xl">
      <div className="flex justify-between items-center py-4 h-[60px] md:h-[80px] px-3 sm:px-10 md:px-24 lg:px-28 xl:px-32 2xl:px-40">
        <div>
          <ButtonCustom
            className="flex md:hidden"
            onClick={() => setOpen(!open)}
            icon={<MenuOutlined style={{ fontSize: "24px" }} />}
          />
          {open ? <NavigationMobile setOpen={setOpen} /> : null}
        </div>
        <div className="hidden md:flex hover:motion-safe:animate-bounce">
          <Link to="/">
            <img className="" src="./images/delivery.png" alt="delivery" />
          </Link>
        </div>
        <SlideHeader />
        <div className="flex items-center gap-4">
          <ButtonComponent
            className="flex items-center px-2 py-1 gap-2 border-2 rounded-md border-green-700 text-green-700"
            name="giỏ hàng"
            styleName="hidden lg:flex"
            icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
          />
          <div>
            <ButtonComponent
              className="font-bold text-green-700"
              name="Đăng nhập"
              onClick={() => {
                setShow(!show);
              }}
            />
            {show ? (
              <ModalCustom setShow={setShow} name="Chào mừng đến với Phúc Long">
                <div className="flex flex-col gap-3 items-center">
                  {dataForm.map((item, index) => {
                    return (
                      <button
                        className="border rounded-full px-6 h-10 w-[320px] flex gap-8 items-center hover:bg-black hover:bg-opacity-10"
                        key={index}
                      >
                        <img src={item.icon} alt=""/>
                        <span>{item.label}</span>
                      </button> 
                    )
                  })}
                  <div>
                    <span>Bạn chưa có tài khoản?</span>
                    <ButtonCustom
                      className="p-1.5 bg-white w-[120px] rounded-lg"
                      name="Đăng kí"
                      styleName="text-green-700 text-base"
                      onClick={() => {}}
                    />
                  </div>
                  <div className="text-center mt-8">
                    <span>Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với</span>
                    <div>
                      <Link className="underline decoration-solid" to="">Điều khoản sử dụng</Link>  
                      <span> của chúng tôi.</span>
                    </div>
                  </div>
                </div>
              </ModalCustom>
            ) : null}
          </div>
          <div className="hidden md:flex items-center">
            <ButtonComponent
              className="border-r-2 border-green-700 pr-2 text-green-700"
              name="VN"
            />
            <ButtonComponent className="pl-2" name="EN" />
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
