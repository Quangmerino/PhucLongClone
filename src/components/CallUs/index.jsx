import { PhoneOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent";

export default function CallUs(){
    return(
        <ButtonComponent 
            className="flex flex-row-reverse font-bold items-center animate-bounce fixed z-50 left-10 bottom-52 bg-black text-white rounded-full gap-2 pr-2"
            icon={
                <PhoneOutlined 
                    className="animate-spin"
                    style={{fontSize:'20px', color: 'white', padding:'8px', background:'green', borderRadius: '50%'}} 
                />
                }
            name='18006779'
        />
    )
}