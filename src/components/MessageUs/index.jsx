import {
  EllipsisOutlined,
  MessageOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../ButtonComponent";

export default function MessageUs() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <ButtonCustom
        className="p-4 fixed right-4 z-40 bottom-1/4 bg-sky-500 flex items-center rounded-full animate-bounce md:right-10"
        icon={
          <MessageOutlined
            className="text-white"
            style={{ fontSize: "20px" }}
          />
        }
        onClick={() => setOpen(!open)}
      />
      {open ? (
        <div className="fixed left-0 bottom-0 right-0 flex flex-col gap-3 rounded-t-2xl shadow-lg py-8 px-4 bg-white md:rounded-2xl md:left-auto md:shadow-2xl z-50 md:w-[355px] md:right-24 md:bottom-1/4">
          <div className="flex justify-between">
            <img className="h-[30px]" src="./images/logo2.png" alt="" />
            <div className="flex gap-3 items-center relative">
              <ButtonCustom
                className="p-1.5 bg-gray-200 rounded-full flex items-center"
                icon={<EllipsisOutlined />}
                onClick={() => {
                  setShow(!show);
                }}
              />
              <ButtonCustom
                className="p-1.5 bg-gray-200 rounded-full flex items-center"
                icon={<MinusOutlined />}
                onClick={() => setOpen(false)}
              />
            </div>
            {show ? (
              <ul className="absolute flex flex-col bg-white shadow-xl top-16 p-1.5 w-[318px] rounded-md border">
                <Link className="px-2 py-1 hover:bg-gray-300 rounded-md" to="">
                  Visit Facebook Page
                </Link>
                <Link className="px-2 py-1 hover:bg-gray-300 rounded-md" to="">
                  Add messenger to your website
                </Link>
              </ul>
            ) : null}
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-[20px] bg-white text-ellipsis rounded-full overflow-hidden whitespace-nowrap truncate">
              Chat with Phuc Long Coffee & Tea
            </span>
            <img src="/svg/accuracy.svg" alt="" />
          </div>
          <span>Chào bạn, bạn cần Phúc Long hỗ trợ gì?</span>
          <ButtonCustom
            name="Start chat"
            className="flex justify-center w-full mt-40 bg-green-500 font-bold text-white rounded-lg py-2"
          />
          <div className="flex items-center justify-center gap-2 py-1 px-8">
            <img className="w-[20px] h-auto" src="/svg/icon-messenger.svg.png" alt="" />
            <span className="font-semibold">Powered by Messenger</span>
          </div>
        </div>
      ) : null}
    </>
  );
}
