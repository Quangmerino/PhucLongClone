import { BackTop } from "antd"

export default function BackToTop(){
    return(
        <>
            <BackTop 
                className="absolute z-50 right-14 bottom-10 text-green-600 animate-spin"
                style={{fontSize:'30px'}}
            />
        </>
    )
}