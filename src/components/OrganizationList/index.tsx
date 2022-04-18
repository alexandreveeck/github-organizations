import { Container, PaginationContainer } from "./styles";
import { useEffect, useState } from "react";
import organizationService from "../../services/organizationService";
import IOrganization from "../../types/IOrganization";
import 'antd/dist/antd.css';
import { List, Avatar, Pagination } from 'antd';
import { Link } from 'react-router-dom';

/* 
    Normally I would make a parameter on the API endpoint to skip the registers that I have already consumed and would deliver
    to ordered by name to the frontend. However this API has three parameters: per_page, since and accept. The since parameter obtains 
    registers greater than a specific ID. But considering that I  need to order the registers on the frontend I can't use that. 
    For this specific reason I decided to take all data from the request and paginate it. But in my opinion the best solution would 
    be having a parameter skip and take, on the api, taking only the necessary. The order of the registers should be on the API as well. 
*/

function OrganizationList() {
    const [organizations, setOrganizations] = useState<IOrganization[]>([])
    const [data, setData] = useState<IOrganization[]>([])
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = (await organizationService.getAll()).data;
                const orderedList =  await orderByName(response);
                setTotal(response.length);
                setData(orderedList);
        }
        fetchData();
    }, []);

    useEffect(() => {
        handlePageChange(1, 10);
    }, [data]);

    async function handlePageChange(page: number, pageSize: number) {
            const start = page === 1 ? 0 : (pageSize * page - pageSize);
            const limit = (pageSize * page);
            const pageRegisters =  data.slice(start, limit);
            setOrganizations(pageRegisters);
    }

    function orderByName(data: IOrganization[]) {
        return data.sort((a, b) => a.login.localeCompare(b.login));
    }
    
    if(organizations.length <= 0 )
        return (<span>Loading...</span>)
    else
    return (
                <Container>
                    <List
                                itemLayout="horizontal"
                                dataSource={organizations}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.avatar_url} />}
                                            title={<Link to={`/organizationDetails/${item.id}`}>{item.login}</Link>}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )} />
                    <PaginationContainer>
                        <Pagination defaultCurrent={1} total={total} 
                        onChange={handlePageChange} />         
                    </PaginationContainer>
                    </Container>
            )}

export default OrganizationList;