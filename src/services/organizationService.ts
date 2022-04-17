import http from '../services/http-common';
import IOrganization from "../types/IOrganization";
import IOrganizationDetails from '../types/IOrganizationDetails';


const getAll = () => {
  return http.get<Array<IOrganization>>("/organizations");
};

const getOrganizationById = (id: string) => {
  return http.get<IOrganizationDetails>(`organizations/${id}`)
}

const OrganizationService = {
    getAll,
    getOrganizationById,
  };
  export default OrganizationService;

