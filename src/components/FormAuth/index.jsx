import { Link } from "react-router-dom"
import ButtonCustom from "../ButtonComponent"
import ModalCustom from "../Modal"

function ModalAuth(props){
    const {show, setShow, name, setName, dataForm, title, setTitle, subTitle, setSubTitle} = props
    return(
        <ModalCustom setShow={setShow} name={name}>
                <div className="flex flex-col gap-3 items-center">
                  {dataForm.map((item, index) => {
                    return (
                      <button
                        className="border rounded-full px-6 h-10 w-[320px] flex gap-8 items-center hover:bg-black hover:bg-opacity-10"
                        key={index}
                      >
                        <img src={item.icon} alt=""/>
                        <span>{item.label}</span>
                      </button> 
                    )
                  })}
                  <div>
                    <span>{subTitle}</span>
                    <ButtonCustom
                      className="p-1.5 bg-white w-[120px] rounded-lg"
                      name={title}
                      styleName="text-green-700 text-base"
                      onClick={() => 
                      {
                        title === "Đăng kí" ? setTitle("Đăng nhập") : setTitle("Đăng kí")
                        name === "Chào mừng đến với Phúc Long" ? setName("Đăng kí tài khoản Phúc Long") : setName("Chào mừng đến với Phúc Long")
                        subTitle === "Bạn chưa có tài khoản?" ? setSubTitle("Bạn đã có tài khoản?") : setSubTitle("Bạn chưa có tài khoản?")
                      }}
                    />
                  </div>
                  <div className="text-center mt-8">
                    <span>Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với</span>
                    <div>
                      <Link className="underline decoration-solid" to="">Điều khoản sử dụng</Link>  
                      <span> của chúng tôi.</span>
                    </div>
                  </div>
                </div>
              </ModalCustom>
    )
}

export default ModalAuth;