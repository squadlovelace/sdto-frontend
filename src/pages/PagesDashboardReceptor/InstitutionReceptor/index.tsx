import React from 'react';

import SidebarReceptor from '../../../components/sidebar/sidebarreceptor';
import ListInstituition from './ListInstituition';

const InstitutionReceptor = () => (
  <div className="flex gap-[90px] w-[100%]">
    <SidebarReceptor />
    <ListInstituition />
  </div>
);

export default InstitutionReceptor;
