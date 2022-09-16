import { PhoneOutlined } from "@ant-design/icons";

export default function CallUs() {
  return (
    <div className="relative">
      <a
        className="flex font-bold items-center border border-green-700 text-green-700 fixed left-4 z-[8] bottom-1/4 bg-white rounded-full gap-2 sm:pr-4 md:left-10"
        href="tel:18006779"
      >
        <div className="absolute w-[30px] h-[30px] rounded-full -z-10 bg-green-700 animate-ping ml-1"></div>
        <PhoneOutlined
          style={{
            fontSize: "20px",
            color: "white",
            padding: "10px",
            background: "green",
            borderRadius: "50%",
          }}
        />
        <span className="hidden sm:flex">18006779</span>
      </a>
    </div>
  );
}
