import { useTitle } from "../../hooks/useTitle";
import Slide from "../../components/Slide";
import Title from "../../components/Title";
import { dataHome, cities, dataStore, district } from "./data";
import ButtonCustom from "../../components/ButtonComponent";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link } from "react-router-dom";

export default function HomePage() {
  useTitle("Phúc Long Coffee & Tea");
  return (
    <div className="">
      <Slide />
      {dataHome.map((item, index) => {
        return (
          <div
            key={index}
            className="flex gap-36 px-36 py-28 odd:flex-row-reverse"
          >
            <div className="basis-1/2">
              <img className="w-full" src={`${item.img}`} alt="" />
            </div>
            <div className="flex basis-1/2 flex-col justify-center items-start gap-6">
              <Title title={item.title} className="text-green-700" />
              <p>{item.des}</p>
              <ButtonCustom
                className="border border-green-700 text-green-700 rounded-md py-1 px-4 hover:bg-green-700 hover:text-white"
                name={item.name}
              />
            </div>
          </div>
        );
      })}
      <div className="bg-green-700 px-24 pt-20 pb-6 flex flex-col">
        <div className="flex flex-col gap-8">
          <Title title="HỆ THỐNG CỬA HÀNG" className="text-white text-28px" />
          <div className="flex gap-2">
            <select class="w-full max-w-xs outline-none border-2 border-white bg-green-700 text-white rounded-md py-1 px-3">
              {cities.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.value}
                  </option>
                );
              })}
            </select>
            <select class="w-full max-w-xs outline-none border-2 border-white bg-green-700 text-white rounded-md py-1 px-3">
              {district.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.value}
                  </option>
                );
              })}
            </select>
          </div>
          <Title
            title="Địa chỉ cửa hàng"
            className="text-white text-[18px] normal-case"
          />
        </div>
        <div className="flex flex-col gap-4 mt-10 overflow-auto h-[300px]">
          {dataStore.map((item, index) => {
            return (
              <div className="flex items-center gap-4">
                <div className="basis-1/5">
                  <Link className="text-white" to="">
                    <StorefrontIcon className="text-white" />
                    <span>{item.address}</span>
                    <span className="block w-[400px]">{item.phone}</span>
                  </Link>
                </div>
                <ButtonCustom
                  name="Chỉ đường"
                  className="border border-white hover:border-red-500 py-1.5 px-4 rounded-md text-white"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
