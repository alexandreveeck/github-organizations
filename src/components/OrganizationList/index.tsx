import { Container } from "./styles";
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
        fetchData();
    }, []);

    useEffect(() => {
        handlePageChange(1, 10);
    }, [data]);

    async function fetchData() {
        const response = (await organizationService.getAll()).data;
            setTotal(response.length);
            const orderedList =  await orderByName(response);
            setData(orderedList);
    }

    async function handlePageChange(page: number, pageSize: number) {
            let start = page == 1 ? 0 : (10 * page - 10);
            const limit = (10 * page) -1;
            const pageRegisters =  data.slice(start, limit);
            setOrganizations(pageRegisters);
    }

    function orderByName(data: IOrganization[]) {
        return data.sort((a, b) => a.login.localeCompare(b.login))
    }
    
    if(organizations.length <= 0 )
        return (<span>Loading...</span>)
    else
    return (
            <div style={{ display: 'block', width: 700, padding: 30 }}>
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
                    </Container>
                    <Pagination defaultCurrent={1} total={total} 
                    onChange={handlePageChange} />
            </div>
            )}

export default OrganizationList;