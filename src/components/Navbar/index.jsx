import { Link } from "react-router-dom";
import { navigations } from "../../data";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import ButtonCustom from "../ButtonComponent";
import { useState } from "react";

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav">
      <ul className="flex py-2 justify-center">
        {navigations.map((item, index) => {
          return (
            <li key={index} className="nav__item">
              <Link to={item.path}>{item.name}</Link>
              {item.sub_menu && item.sub_menu.length > 0 && (
                <ul class="sub-menu">
                  {item.sub_menu.map((item, index) => {
                    return (
                      <li className="sub-menu__item">
                        <Link key={index} to={item.path} className="">
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <div className="nav__search">
        <ButtonCustom
          className="nav__search--button"
          icon={<SearchOutlined style={{ fontSize: "18px" }} />}
          onClick={() => {
            setOpen(!open);
          }}
        />
        {open ? (
          <ul className="nav__search--list">
            <li className="nav__search--item">
              <Link to="">Sản phẩm cà phê</Link>
            </li>
            <li className="nav__search--item">
              <Link to="">Sản phẩm trà</Link>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function NavigationMobile(props) {
  const { setOpen } = props;
  return (
    <>
      <div
        className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-[90]"
        onClick={() => {
          setOpen(false);
        }}
      />
      <div className="fixed z-[100] transition-all duration-300 bg-blend-screen top-0 left-0 bg-white h-screen ">
        <ButtonCustom
          onClick={() => {
            setOpen(false);
          }}
          icon={
            <CloseCircleOutlined
              className="absolute right-4 top-4 hover:rotate-[360deg]"
              style={{ fontSize: "25px" }}
            />
          }
        />
        <ul className="nav__mobile">
          {navigations.map((item, index) => {
            return (
              <li 
                key={index}
                onClick= {() => {
                  setOpen(false);
                }}
              >
                <Link to={item.path} className="nav__mobile--item">
                  {item.name}
                </Link>
                {item.sub_menu && item.sub_menu.length > 0 && (
                  <ul class="sub-menu">
                    {item.sub_menu.map((item, index) => {
                      return (
                        <button className="sub-menu__item">
                          <Link key={index} to={item.path}>
                            {item.name}
                          </Link>
                        </button>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
          <div className="flex items-start p-3 gap-4">
            <ButtonCustom className="nav__mobile--button" name="VN" />
            <ButtonCustom
              className="border-gray-400 border rounded-md px-2"
              name="EN"
            />
          </div>
        </ul>
      </div>
    </>
  );
}

export { Navigation, NavigationMobile };
