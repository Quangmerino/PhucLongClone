import { useTitle } from "../../hooks/useTitle";
// import Tabs from "../../components/Tabs";
import { dataTeaTab1 } from "../../data";
import { CardComponent } from "../../components/Card";
import HeaderContent from "../../components/HeaderContent";

export default function TeaPage() {
  useTitle("Lá trà Phúc Long - Phúc Long Coffee & Tea");
  return (
    <div className="flex flex-col items-center">
      <HeaderContent
        bannerImg="/images/banner-tea.jpeg"
        breadcrumbs="Lá trà Phúc Long"
        title="LÁ TRÀ PHÚC LONG"
      />
      {/* <Tabs/> */}
      <div className="px-3">
        {dataTeaTab1.map((item, index) => {
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
