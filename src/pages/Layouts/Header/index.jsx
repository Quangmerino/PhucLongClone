import ButtonComponent from "../../../components/ButtonComponent"
import delivery from "./images/delivery.png";
import Navigation from "../../../components/Navbar";
import SlideHeader from "./slide";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Header() {
    
    return (
        <div className="fixed top-0 right-0 left-0 z-10 bg-white">
            <div className="w-full h-[80px] flex px-[150px] py-[20px] justify-between">
            <img className='hover:motion-safe:animate-bounce' src={delivery} alt='delivery'/>
            <SlideHeader/>
            <div className="flex items-center gap-4">
                <ButtonComponent className='font-bold' name='Đăng nhập'/>
                <div className="flex items-center">
                    <ButtonComponent className='border-r-2 border-green-700 pr-2 text-green-700' name='VN'/>
                    <ButtonComponent className='pl-2' name='EN'/>
                </div>
                <ButtonComponent 
                    className='flex items-center px-2 py-1 gap-2 border-2 rounded-md border-green-700 text-green-700' 
                    name='giỏ hàng' 
                    icon={<ShoppingCartOutlined style={{fontSize: '20px'}}/>}/>
            </div>
        </div>
        <Navigation/>
        </div>
    )
}