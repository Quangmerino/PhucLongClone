import TitlePage from "../Title";

function CardComponent({ img, title, des, backgroundImage, styleProduct, styleBackground ,children}) {
  return (
    <div className={`flex flex-col py-6 gap-10 md:flex-row lg:gap-10 xl:gap-20 ${styleProduct}`}>
      <div className="flex justify-center basis-full bg-no-repeat items-center md:basis-1/2" style={{background: `${backgroundImage} center no-repeat`, backgroundSize: "contain"}}>
        <img className={`object-cover ${styleBackground || "" }`} src={`${img}`} alt={title} />
      </div>
      <div className="flex flex-col justify-center items-start gap-6 py-6 md:py-16 basis-full md:basis-1/2 lg:py-20">
        <TitlePage title={title} className="text-[20px] text-green-700" />
        <p className="text-[16px] md:text-[20px] text-justify">{des}</p>
        {children}
      </div>
    </div>
  );
}

function CardProduct({image, className, classNameChild, children}) {
  return (
    <div className={`${className} cursor-pointer`}>
      <img src={image} className="object-contain w-full h-[250px] md:h-[220px]" alt="product-images" />
      <div className={classNameChild}>
        {children}
      </div>
    </div>
  );
}

export { CardComponent, CardProduct };
