import {useTitle} from "../../hooks/useTitle";
import HeaderContent from "../../components/HeaderContent";
import ButtonCustom from "../../components/ButtonComponent"

export default function CardPage() {
    useTitle("Thông tin chương trình thanhf viên Phúc Long Coffee & Tea")
    return (
        <div className="flex flex-col items-center gap-10 mb-64 pt-10 px-3 md:px-10">
            <HeaderContent breadcrumbs="Thông tin chương trình Thành viên" title="Thông tin chương trình Thành viên"/>
            <div className="flex flex-col items-center gap-8">
                <h2 className="text-[28px] text-center">Để kích hoạt Thành viên Phúc Long vui lòng tham khảo tại đây:</h2>
                <ButtonCustom className="text-white bg-green-700 uppercase py-3 rounded-lg text-[30px] px-12" name="Đăng kí thẻ"/>
            </div>
        </div>
    )
}