function ModalCustom(props) {
  const { name, children, setShow, logo } = props;

  return (
    <>
      <div
        className="layer fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-40"
        onClick={() => {
          setShow(false);
        }}
      />
      <div 
        className="fixed modal-box left-4 right-4 top-[10%] bottom-[10%] rounded-xl bg-white shadow-2xl overflow-hidden z-50 md:top-[15%] md:bottom-[15%] md:left-1/4 md:right-1/4 lg:left-56 lg:right-56 xl:left-1/4 xl:right-1/4"
      >
        <div className="flex flex-col items-center p-5 md:px-10 gap-6">
          <img className="w-[80px]" src="./images/logo2.png" alt=""/>
          <h3 className="text-green-700 uppercase font-semibold text-xl text-center lg:text-2xl xl:text-3xl">
            {name}
          </h3>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
}

export default ModalCustom;
