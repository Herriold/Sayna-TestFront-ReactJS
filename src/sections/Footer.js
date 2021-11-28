import Text from "../components/Text";

const Footer = () => {
    return(
        <div className="container-footer">
            <div className="content-menu">
                <div>
                    <Text bigTitle="bigTitle">ADDRESS</Text>
                    <div>
                        <Text>400-401 West Georgia Street</Text>
                        <Text>Vancouver, BC, Canada, V6B 5A1</Text>
                        <Text>+1 (123) 456 7890</Text>
                        <Text>sales@insurance.com</Text>
                    </div>
                </div>
                <div>
                    <Text bigTitle="bigTitle">FOLLOW US</Text>
                    <div>
                        <Text>Twitter</Text>
                        <Text>Facebook</Text>
                        <Text>LinkedIn</Text>
                        <Text>Instagram</Text>
                    </div>
                </div>
                <div>
                    <Text bigTitle="bigTitle">ABOUT US</Text>
                    <div>
                        <Text>Compellingly myocardinate market-driven infrastructures before team driven manufactured products. Monotonectally exploit tactical markets vis-a-vis excellent deliverables.</Text>
                    </div>
                </div>
            </div>
            <Text custom="copyright">Copyright © 2019. Insurance LLC</Text>
        </div>
    )
}

export default Footer;