import React from 'react';

import SidebarInstituition from '../../components/sidebar/sidebarinstitution';
import EditPerfilInstituition from './EditPerfilInstituition';

const EditPerfiDashboardReceptor = () => (
  <div className="flex gap-[90px]">
    <SidebarInstituition />
    <EditPerfilInstituition />
  </div>
);

export default EditPerfiDashboardReceptor;
