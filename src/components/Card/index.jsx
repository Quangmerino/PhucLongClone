import TitlePage from "../Title";
import ButtonCustom from "../ButtonComponent";
import Item from "antd/lib/list/Item";

function CardComponent({ img, title, des, name, className, style }) {
  return (
    <div className="flex gap-28 px-36 py-28 odd:flex-row-reverse">
      <div className="basis-1/2" style={{style}}>
        <img className="w-full object-cover" src={`${img}`} alt={Item.title} />
      </div>
      <div className="flex basis-1/2 flex-col justify-center items-start gap-6">
        <TitlePage title={title} className="text-green-700" />
        <p className="text-[20px]">{des}</p>
        <ButtonCustom className={`${className}`} name={name} />
      </div>
    </div>
  );
}

function CardProduct({image, className, classNameChild, children, ...props}) {
  return (
    <div className={className}>
      <img src={image} className="object-cover w-full h-[220px]" alt="product-images" />
      <div className={classNameChild}>
        {children}
      </div>
    </div>
  );
}

export { CardComponent, CardProduct };
