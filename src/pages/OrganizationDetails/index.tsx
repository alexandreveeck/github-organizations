import { Col, PageHeader, Row, Statistic } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import organizationService from "../../services/organizationService";
import IOrganizationDetails from "../../types/IOrganizationDetails";
import { Container, Content } from "./styles";

function OrganizationDetails(){
  const [organization, setOrganization] = useState<IOrganizationDetails>();
  const { id } = useParams();

    useEffect(() => {
      async function fetchData(){
        if(id) {
          var data = (await organizationService.getOrganizationById(id)).data;
          setOrganization(data);
        }
      } 
      fetchData();
    }, []);

    return (
        <Container>
          <PageHeader
          className="site-page-header"
          onBack={() => window.history.back() }
          title={organization?.name}
          subTitle="About the organization"
        />
        <Content>
          <img width="150" src={organization?.avatar_url} alt="avatar"></img>
          <Row gutter={[8, 8]}>
            <Col span={4}>
              <p>Description</p>
            </Col>
            <Col span={4}>
              <p>{organization?.description}</p>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={4}>
              <p>Location</p>
            </Col>
            <Col span={4}>
              <p>{organization?.location}</p>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={4}>
              <p>Created at</p>
            </Col>
            <Col span={4}>
              <p>{moment(organization?.created_at).format('MM/DD/YYYY hh:mm a')}</p>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={4}>
              <p>Email</p>
            </Col>
            <Col span={4}>
              <p>{organization?.email}</p>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={4}>
              <p>Blog</p>
            </Col>
            <Col span={4}>
              <Link to="/" onClick={() => {
                window.open(
                  organization?.blog,
                  '_blank'
                );
              }} target="_blank">{organization?.blog}</Link>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={4}>
              <p>Github</p>
            </Col>
            <Col span={4}>
              <Link to="/" onClick={() => {
                window.open(
                  organization?.html_url,
                  '_blank'
                );
              }} target="_blank">{organization?.html_url}</Link>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
          <Col span={4}>
              <Statistic title="Followers" value={organization?.followers} />
          </Col>
          <Col span={4}>
              <Statistic title="Following" value={organization?.following} />
          </Col>
          <Col span={4}>
              <Statistic title="Public repos" value={organization?.public_repos} />
          </Col>
          </Row>
        </Content>
      </Container>
    )
}

export default OrganizationDetails;