import { useTitle } from "../../hooks/useTitle";
import { CardComponent } from "../../components/Card";
import { dataCoffee } from "../../data";
// import Tabs from "../../components/Tabs";
import HeaderContent from "../../components/HeaderContent";

export default function CoffeePage() {
  useTitle("Hạt cà phê Phúc Long - Phúc Long Coffee & Tea");
  return (
    <div className="flex flex-col items-center">
      <HeaderContent
        bannerImg="/images/banner-coffee.png"
        breadcrumbs="Hạt cà phê Phúc Long"
        title="HẠT CÀ PHÊ PHÚC LONG"
      />
      {/* <Tabs/> */}
      <div className="px-3">
        {dataCoffee.map((item, index) => {
          return (
            <CardComponent
              key={index}
              img={item.img}
              des={item.des}
              styleProduct="md:even:flex-row-reverse"
            />
          );
        })}
      </div>
    </div>
  );
}
