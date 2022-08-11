import ButtonComponent from "../../../components/ButtonComponent"
import delivery from "./images/delivery.png";
import logo from "./images/logo_2.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header() {
    return (
        <div className="w-full h-[100px] flex px-[100px] py-[25px] justify-between">
            <img src={delivery} alt='delivery'/>
            <img src={logo} alt='logo'/>
            <div className="flex items-center gap-4">
                <ButtonComponent className='font-bold' name='Đăng nhập'/>
                <div className="flex items-center">
                    <ButtonComponent className='border-r-2 border-green-700 pr-2 text-green-700' name='VN'/>
                    <ButtonComponent className='pl-2' name='EN'/>
                </div>
                <ButtonComponent 
                    className='px-2 py-1 gap-2 border-2 rounded-md border-green-700 text-green-700' 
                    name='giỏ hàng' 
                    icon={<ShoppingCartOutlinedIcon/>}/>
            </div>
        </div>
    )
}