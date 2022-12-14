import { useTitle } from "../../hooks/useTitle";
import HeaderContent from "../../components/HeaderContent";
import TitlePage from "../../components/Title";
import { dataAbout } from "../../data";

export default function AboutPage() {
  useTitle("Về chúng tôi - Phúc Long Coffee & Tea");
  return (
    <div className="flex flex-col items-center">
      <HeaderContent
        bannerImg="./images/banner-about.png"
        breadcrumbs="Về chúng tôi"
        title="Về chúng tôi"
      />
      <img className="mt-20 w-[80px] sm:w-[120px]" src="./images/logo.png" alt="" />
      <div className="flex flex-col gap-6 px-3 py-16 md:px-10 xl:px-20 2xl:px-56">
        {dataAbout.map((item, index) => {
          return (
            <div key={index}>
              <TitlePage className="text-green-700 font-bold mb-3" title={item.title} />
              {item.content.map((item, index) => {
                return (
                  <p key={index} className="text-justify md:text-start">
                    <span className="font-bold">{item.label}</span>
                    {item.description}
                  </p>
                );
              })}
              {/* {item.animation.map((item, index)=>{
                return(
                  <img src={item.image} alt=""/>
                )
              })} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
