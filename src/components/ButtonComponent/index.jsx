export default function ButtonComponent(props){
    const {onClick, name, className, icon} = props;
    let classDefault = '';
    if(className !== '') classDefault += ' ' + className;
    return(
        <button className={classDefault} onClick={onClick}>
            {name}
            {icon}
        </button>
    )
}