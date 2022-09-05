import { useTitle } from "../../hooks/useTitle";
import Slide from "../../components/Slide";
import Breadcrumbs from "../../components/Breadcrumbs";
import { CardProduct } from "../../components/Card";
import { dataSale } from "../../data";
import { EyeOutlined } from "@ant-design/icons";

export default function SalePage() {
  useTitle("Khuyến mãi - Phúc Long Coffee & Tea");
  return (
    <>
      <Slide />
      <div className="">
        <Breadcrumbs breadcrumbs="Khuyến mãi" />
        <div className="row">
        <div className="grid grid-cols-1 gap-y-8 py-16 md:grid-cols-2 md:gap-10 md:px-10 lg:grid-cols-3 xl:grid-cols-4">
          {dataSale.map((item, index) => {
            return (
              <CardProduct
                key={index}
                className="flex flex-col items-center border gap-1.5 shadow-lg bg-white overflow-hidden rounded-md pb-4 md:shadow-none md:hover:shadow-lg md:hover:border lg:border-0"
                classNameChild="flex flex-col w-full last:hover:text-green-700"
                image={item.img}
              >
                <div className="flex items-center justify-between px-3 py-1.5 border-b-2 text-[14px] text-gray-400">
                  <span>{item.time}</span>
                  <span className="flex item-center gap-2">
                    <EyeOutlined className="flex items-center" />
                    {item.view}
                  </span>
                </div>
                <p className="truncate overflow-hidden max-w-[300px] p-3">
                  {item.title}
                </p>
              </CardProduct>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
}
