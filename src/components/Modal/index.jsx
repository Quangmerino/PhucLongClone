function ModalCustom(props) {
  const { name, children, setShow } = props;

  return (
    <>
      <div
        className="layer fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-40"
        onClick={() => {
          setShow(false);
        }}
      />
      <div 
        className="fixed modal-box left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-2xl overflow-hidden z-50"
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
