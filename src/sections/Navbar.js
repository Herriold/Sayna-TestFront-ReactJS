import logo from '../assets/img/logo.png';
import Text from '../components/Text';

const Navbar = () => {
    return(
        <div className="container-logo">
            <img className="logo" src={logo} alt="logo" />
            <div className="navbar-menu">
                <Text custom="menu-title active">For you & family</Text>
                <Text custom="menu-title">For Business</Text>
            </div>
        </div>
    )
}

export default Navbar;