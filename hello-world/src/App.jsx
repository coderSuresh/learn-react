import Button from "./Button"
const Printer = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>This is very simple React app</p>
            <Button btnTxt="Google" link="https://google.com"/>
            <Button btnTxt="Facebook" link="https://facebook.com"/>
        </div>
    )
}

export default Printer