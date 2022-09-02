import Breadcrumbs from "../Breadcrumbs";
import TitlePage from "../Title";

export default function HeaderContent(props){
    const {breadcrumbs, title, bannerImg} = props;
    return(
        <div className="flex flex-col items-center">
            {
                (bannerImg && bannerImg !== "") ? <img src={bannerImg} alt="banner"/> : null
            }
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <TitlePage className="text-green-700 lg:text-[36px]" title={title}/>
            <img className="w-[200px] md:w-[300px]" src="/images/icon_tealeaves.png" alt=""/>
        </div>
    )
}