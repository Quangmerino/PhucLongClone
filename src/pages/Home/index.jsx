import {useTitle} from "../../hooks/useTitle";
import Slide from "../../components/Slide";

export default function HomePage() {
    useTitle("Phúc Long Coffee & Tea")
    return (
        <div>
            <Slide/>
        </div>
    )
}