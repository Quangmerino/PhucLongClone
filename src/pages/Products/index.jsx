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
              key={index}
              img={item.img}
              title={item.title}
              des={item.des}
              name={item.name}
              className="text-green-700 rounded-md py-1 px-4 border border-green-700 hover:bg-green-700 hover:text-white"
            />
          );
        })}
      </div>
    </>
  );
}
