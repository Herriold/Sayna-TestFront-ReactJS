
const Button = ({ isGrad, children }) => {
    return(
        <button class={`${isGrad ? " button-gradient " : " button-fincorp "}`}>{children}</button>
    )
}

export default Button;