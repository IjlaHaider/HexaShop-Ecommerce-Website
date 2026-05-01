const Button = (props)=>{
    return(
<>
<Button className="minus" onclick={props.eventHandeler} > {props.childern}</Button>
</>
    )
}
export default Button