import Text from "../components/Text";
import Banner from '../assets/img/banner-1.png'
import Button from "../components/Button";

const Top = () => {
    return(
        <div className="banner-container">
            <div className="banner-block-text">
                <Text subtitle custom="top-custom-text">Hello, We are Fincorp</Text>
                <Text custom="top-bigtitle">Insurance<br/>made easy.</Text>
                <Button isGrad>Get your free Quote</Button>
            </div>
            <img src={Banner} className="banner-img" alt="Banner" />
        </div>
    )
}

export default Top;