import TitlePage from "../Title";
import ButtonCustom from "../ButtonComponent";

function CardComponent({ img, title, des, name, className, backgroundImage, styleProduct, styleBackground }) {
  return (
    <div className={`flex flex-col py-6 gap-10 md:py-16 md:px-8 md:flex-row lg:gap-10 lg:py-20 lg:px-8 xl:gap-20 xl:px-12 ${styleProduct}`}>
      <div className="flex justify-center basis-full bg-no-repeat items-center md:basis-1/2" style={{background: `${backgroundImage} center`}}>
        <img className={`object-contain ${styleBackground || "" }`} src={`${img}`} alt={title} />
      </div>
      <div className="flex flex-col justify-center items-start gap-6 basis-full md:basis-1/2">
        <TitlePage title={title} className="text-[20px] text-green-700" />
        <p className="text-[16px] md:text-[20px] text-justify">{des}</p>
        <ButtonCustom className={`${className}`} name={name} />
      </div>
    </div>
  );
}

function CardProduct({image, className, classNameChild, children}) {
  return (
    <div className={className}>
      <img src={image} className="object-contain w-full h-[220px]" alt="product-images" />
      <div className={classNameChild}>
        {children}
      </div>
    </div>
  );
}

export { CardComponent, CardProduct };
