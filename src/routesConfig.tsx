import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import OrganizationDetails from './pages/OrganizationDetails';

const routesConfig = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organizationDetails/:id" element={<OrganizationDetails />} />
    </Routes>
  );
};

export default routesConfig;
