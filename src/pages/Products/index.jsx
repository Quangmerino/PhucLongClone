import { useTitle } from "../../hooks/useTitle";
import HeaderContent from "../../components/HeaderContent";
import { CardComponent } from "../../components/Card";
import { dataProduct } from "../../data";

export default function ProductPage() {
  useTitle("Phúc Long Coffee & Tea House");
  return (
    <>
      <HeaderContent
        bannerImg="/images/banner4.jpeg"
        breadcrumbs="Sản phẩm"
        title="SẢN PHẨM"
      />
      <div className="">
        {dataProduct.map((item, index) => {
          return (
            <CardComponent
              backgroundImage="url('/images/bg_category_tea.png')"
              key={index}
              img={item.img}
              title={item.title}
              des={item.des}
              name={item.name}
              className="text-green-700 rounded-md py-1 px-4 border border-green-700 hover:bg-green-700 hover:text-white"
              styleProduct="even:flex-row-reverse even:bg-gray-50"
              styleBackground="border rounded-full w-[280px] h-[280px] shadow-lg bg-white"
            />
          );
        })}
      </div>
    </>
  );
}
