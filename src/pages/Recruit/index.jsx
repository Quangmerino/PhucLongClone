import { useState,useEffect } from "react";
import { useTitle } from "../../hooks/useTitle";
import { EyeOutlined } from "@ant-design/icons";
import Breadcrumbs from "../../components/Breadcrumbs";
import { CardProduct } from "../../components/Card";
import ButtonCustom from "../../components/ButtonComponent";
import { dataRecruit } from "../../data";

function RecruitPage() {
  useTitle('Tuyển dụng - Phúc Long Coffee & Tea')
  const [recruits, setRecruits] = useState([]);
  
  useEffect(()=>{
    setRecruits(dataRecruit);
  },[])
  return (
    <div>
      <img src="./images/recruit.png" alt="recruit-banner" />
      <Breadcrumbs breadcrumbs="Tuyển dụng" />
      <div className="row">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-10 lg:py-16 lg:grid-cols-3 xl:grid-cols-4">
          {recruits.map((item, index) => {
            return (
              <CardProduct
                key={index}
                className="flex flex-col items-center border gap-1.5 shadow-lg bg-white overflow-hidden rounded-md pb-4 duration-300 md:shadow-none md:hover:shadow-lg md:hover:border lg:border-0"
                classNameChild="flex flex-col w-full last:hover:text-green-700"
                image={item.img}
              >
                <div className="flex items-center justify-between px-3 py-1.5 border-b-2 text-[14px] text-gray-400">
                  <span className="">Hạn nộp hồ sơ: {item.time}</span>
                  <span className="flex item-center gap-2">
                    <EyeOutlined className="flex items-center" />
                    {item.view}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <p className="truncate overflow-hidden max-w-[300px] p-3">
                    {item.title}
                  </p>
                  <ButtonCustom
                    name="Xem thêm"
                    className="border border-green-700 hover:bg-green-700 hover:text-white py-1.5 px-4 rounded-md text-green-700 text-center"
                  />
                </div>
              </CardProduct>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RecruitPage;
