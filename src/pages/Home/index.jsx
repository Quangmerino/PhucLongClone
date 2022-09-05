import { useTitle } from "../../hooks/useTitle";
import Slide from "../../components/Slide";
import Title from "../../components/Title";
import { dataHome, cities, dataStore, district } from "../../data";
import ButtonCustom from "../../components/ButtonComponent";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { CardComponent } from "../../components/Card";

export default function HomePage() {
  useTitle("Phúc Long Coffee & Tea");
  return (
    <div className="w-full">
      <Slide />
      <div className="row">
        {dataHome.map((item, index) => {
          return (
            <CardComponent
              key={index}
              className="text-green-700 rounded-md py-1 px-4 border border-green-700 m-auto hover:bg-green-700 hover:text-white md:m-0"
              img={item.img}
              title={item.title}
              name={item.name}
              des={item.des}
              styleProduct="md:odd:flex-row-reverse"
            />
          );
        })}
      </div>
      <div className="flex px-4 pt-10 pb-6 bg-green-700 md:pt-20 md:px-6 xl:px-24">
        <div className="flex flex-col basis-full lg:basis-1/2">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-8">
            <Title title="HỆ THỐNG CỬA HÀNG" className="text-white text-28px" />
            <div className="flex gap-2 flex-row">
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
          <div className="flex flex-col gap-4 mt-10 w-full overflow-auto h-[300px]">
            {dataStore.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-4 sm:px-10 lg:px-0 lg:flex-row lg:items-center lg:gap-8">
                  <div className="basis-full lg:basis-1/2">
                    <Link className="text-white flex gap-2" to="/">
                      <HomeOutlined className="hidden text-white mt-1 lg:flex" />
                      <div className="flex flex-col">
                        <span className="text-justify">{item.address}</span>
                        <span className="block">{item.phone}</span>
                      </div>
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
        <div className="lg:basis-1/2"></div>
      </div>
    </div>
  );
}
