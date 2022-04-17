import logo from '../../assets/logo.svg';
import { Container, Content, Logo } from './styles';

function Header(){
    return (
        <Container>
            <Content>
                <Logo>
                    <img src={logo} width="50" height="50" alt="logo"></img>
                </Logo>
                <span>Github Organizations</span>
            </Content>
        </Container>
    )
}

export default Header;