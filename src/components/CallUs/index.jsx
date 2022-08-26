import { PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function CallUs() {
  return (
    <a
      className="flex font-bold items-center animate-bounce fixed z-50 left-10 bottom-1/4 bg-black text-white rounded-full gap-2 pr-4"
      href="tel:18006779"
    >
      <PhoneOutlined
        className="animate-spin"
        style={{
          fontSize: "20px",
          color: "white",
          padding: "10px",
          background: "green",
          borderRadius: "50%",
        }}
      />
      <span>18006779</span>
    </a>
  );
}
