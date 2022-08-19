const Button = (props) => {
    return <a href={props.link} target="_blank"><button className="btn">{props.btnTxt}</button></a>
}
export default Button