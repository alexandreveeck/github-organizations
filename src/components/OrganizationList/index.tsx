import { Container } from "./styles";
import { useEffect, useState } from "react";
import organizationService from "../../services/organizationService";
import IOrganization from "../../types/IOrganization";
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';

/* 
        Normally I would make a parameter on the API endpoint to skip the registers that I have already consumed and would deliver
    to ordered by name to the frontend. However this API has three parameters: per_page, since and accept. The since parameter obtains 
    registers greater than a specific ID. But considering that I  need to order the registers on the frontend I can't use that. 
    For this specific reason I decided to take all data from the request and fetch only 10 on each time. I implemented an infinite 
    scroll using the lib react-inifnite-scroller. But I'm aware that the best solution would be having a parameter skip, take, 
    and order by on the API and consume only the necessary. 
*/

function OrganizationList() {
    const [organizations, setOrganizations] = useState<IOrganization[]>([])
    const [pageRegisters, setPageRegisters] = useState(10);
    const [totalRegisters, setTotalRegisters] = useState(0);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const data = await (await organizationService.getAll()).data;
        setTotalRegisters(data.length);

        setOrganizations(
            orderByName(data)
                .slice(0, pageRegisters) as IOrganization[]
        );
    }

    function loadFunc() {
        setPageRegisters(pageRegisters + 10);
        fetchData();
    }

    function orderByName(data: IOrganization[]) {
        return data.sort((a, b) => a.login.localeCompare(b.login))
    }

    return (
        <Container>
            <h3>Organizations List</h3>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={pageRegisters < totalRegisters}
                threshold={100}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                {
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
                }
            </InfiniteScroll>
        </Container>
    );
}

export default OrganizationList;