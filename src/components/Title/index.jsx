export default function TitlePage(props){
    const{ title, className } = props
    let classDefault = 'uppercase md:text-[24px]';

    if(className !== '') classDefault += ' ' + className;
    return(
        <h2 className={classDefault}>{title}</h2>
    )
}