import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NuCampLogo from '../app/assets/img/logo.png'

const Header = () => {
    return (
        <Navbar dark color="primary" sticky='top' expand='md'>
            <Container>
                <NavbarBrand href='/'>
                    <img src={NuCampLogo} alt="logo" />
                </NavbarBrand>
            </Container>
        </Navbar>
    )
}

export default Header