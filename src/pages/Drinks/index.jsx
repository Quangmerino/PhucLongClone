/* eslint-disable jsx-a11y/anchor-is-valid */
import ButtonCustom from "../../components/ButtonComponent";
import { CardProduct } from "../../components/Card";
import HeaderContent from "../../components/HeaderContent";
// import PaginatedItems from "../../components/Panigation";
import { dataDrinks } from "../../data";
import { useTitle } from "../../hooks/useTitle";

export default function DrinkPage() {
  useTitle("Thức uống - Phúc Long Coffee & Tea");

  return (
    <div className="">
      <HeaderContent
        bannerImg="/images/banner3.png"
        breadcrumbs="Thức uống"
        title="Thức uống"
      />
      <div className="">
        <div className="grid grid-cols-1 p-6 gap-y-8 md:grid-cols-2 md:gap-10 md:p-10 lg:grid-cols-3 lg:p-20 lg:px-10 xl:grid-cols-4">
          {dataDrinks.map((item, index) => {
            return (
              <CardProduct
                key={index}
                image={item.img}
                className="flex flex-col items-center border gap-1.5 rounded-md shadow-lg relative py-7 bg-white md:hover:shadow-lg md:hover:border md:px-12 lg:border-0 lg:pt-2 lg:shadow-none xl:pt-7"
                classNameChild="flex flex-col items-center gap-2"
              >
                <a href="#" title={item.name} className="text-black font-semibold truncate overflow-hidden max-w-[200px]">
                  {item.name}
                </a>
                {item.sub_name !== "" ? (
                  <span className="truncate overflow-hidden max-w-[200px]">
                    {item.sub_name}
                  </span>
                ) : (
                  <span className="text-white">phuc long</span>
                )}
                <span className="text-green-700 font-bold">{item.price} đ</span>
                <ButtonCustom className="text-green-700 rounded-md py-1 px-4 border border-green-700 hover:bg-green-700 hover:text-white" name="ĐẶT HÀNG" />
              </CardProduct>
            );
          })}
        </div>
      </div>
    </div>
  );
}
