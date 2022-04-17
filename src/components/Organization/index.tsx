import { Container } from "./styles";
import IOrganization from '../../types/IOrganization';

function Organization({ id, login, description, avatar_url }: IOrganization){
    return (
        <Container>
           
            {/* <img src={avatar_url}></img>
            <span>Login: {login}</span>    
            <span>Description: {description}</span>  */}
        </Container>
    )
}

export default Organization;