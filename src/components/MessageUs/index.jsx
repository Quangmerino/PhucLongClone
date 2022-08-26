import { EllipsisOutlined, MessageOutlined, MinusOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import ButtonComponent from "../ButtonComponent";

export default function MessageUs() {
  const PopoverMessage = (
    <div className="flex flex-col gap-3 bg-white w-[350px] rounded-lg py-8 px-4 shadow-2xl">
      <div className="flex justify-between">
        <img className="h-[30px]" src="/images/logo2.png" alt="" />
        <div className="flex gap-3 items-center">
            <ButtonComponent className="p-1.5 bg-gray-200 rounded-full flex items-center" icon={<EllipsisOutlined/>}/>
            <ButtonComponent className="p-1.5 bg-gray-200 rounded-full flex items-center" icon={<MinusOutlined/>}/>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="font-bold text-[20px] bg-white text-ellipsis rounded-full overflow-hidden whitespace-nowrap truncate">Chat with Phuc Long Coffee & Tea</span>
        <img src="/svg/accuracy.svg" alt=""/>
      </div>
      <span>Chào bạn, bạn cần Phúc Long hỗ trợ gì?</span>
      <ButtonComponent name='Start chat' className='flex justify-center w-full mt-40 bg-green-500 font-bold text-white rounded-lg py-2'/>
    </div>
  );
  return (
    <Popover className="fixed z-50 right-10 bottom-1/4" content={PopoverMessage}>
      <Button className="p-4 bg-green-600 flex items-center rounded-full animate-bounce">
        <MessageOutlined className="text-white" style={{fontSize: '20px'}}/>
      </Button>
    </Popover>
  );
}
