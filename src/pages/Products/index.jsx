import { useTitle } from "../../hooks/useTitle";
import HeaderContent from "../../components/HeaderContent";
import { CardComponent } from "../../components/Card";
import { dataProduct } from "../../data";
import { useState, useEffect } from "react";

export default function ProductPage() {
  useTitle("Phúc Long Coffee & Tea House");

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(dataProduct);
  },[])

  return (
    <>
      <HeaderContent
        bannerImg="./images/banner4.jpeg"
        breadcrumbs="Sản phẩm"
        title="SẢN PHẨM"
      />
      <div className="py-14">
        {products.map((item, index) => {
          return (
            <CardComponent
              backgroundImage="url('./images/bg_category_tea.png')"
              key={index}
              img={item.img}
              title={item.title}
              des={item.des}
              name={item.name}
              className="text-green-700 rounded-md py-1 px-4 border border-green-700 hover:bg-green-700 hover:text-white"
              styleProduct=" even:bg-gray-50 md:even:flex-row-reverse md:px-10 lg:h-[500px] lg:px-20"
              styleBackground="border rounded-full w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] shadow-lg bg-white"
            />
          );
        })}
      </div>
    </>
  );
}
