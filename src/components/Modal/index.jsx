// import { useState } from "react";

function ModalCustom(props) {
  const { name, children, setShow } = props;

  return (
    <>
      <div
        className="layer fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-[51]"
        onClick={() => {
          setShow(false);
        }}
      />
      <div 
        className="fixed modal-box top-1/4 left-5 right-5 rounded-xl bg-green-700 shadow-2xl overflow-hidden z-[52] md:left-1/4 md:right-1/4"
      >
        <div className="flex flex-col items-center p-5 md:px-10 gap-6">
          <h3 className="text-white uppercase font-semibold text-xl xl:text-2xl">
            {name}
          </h3>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
}

export default ModalCustom;
