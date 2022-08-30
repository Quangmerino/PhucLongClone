import ButtonCustom from "../../components/ButtonComponent";
import { CardProduct } from "../../components/Card";
import HeaderContent from "../../components/HeaderContent";
import { dataDrinks } from "../../data";
import { useTitle } from "../../hooks/useTitle";

export default function DrinkPage() {
  useTitle("Thức uống - Phúc Long Coffee & Tea");
  console.log(dataDrinks);
  return (
    <div className="">
      <HeaderContent
        bannerImg="/images/banner3.png"
        breadcrumbs="Thức uống"
        title="Thức uống"
      />
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 p-20">
          {dataDrinks.map((item, index) => {
            return (
              <CardProduct
                key={index}
                image={item.img}
                className="flex flex-col items-center gap-1.5 relative bg-white hover:shadow-lg hover:border rounded-md py-7 px-12"
                classNameChild="flex flex-col items-center gap-2"
              >
                <span className="text-black font-semibold truncate overflow-hidden max-w-[200px]">
                  {item.name}
                </span>
                {item.sub_name !== "" ? (
                  <span className="truncate overflow-hidden max-w-[200px]">
                    {item.sub_name}
                  </span>
                ) : (
                  <span className="text-white">phuc long</span>
                )}
                <span className="text-green-700 font-bold">{item.price} đ</span>
                <ButtonCustom className="" name="ĐẶT HÀNG" />
              </CardProduct>
            );
          })}
        </div>
      </div>
    </div>
  );
}
