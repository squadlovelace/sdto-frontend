import React from 'react';
import SidebarInstituition from '../../../components/sidebar/sidebarinstitution';
import ListInstituition from './ListInstituition';

const InstitutionColaborador = () => (
  <div className="flex gap-[90px] w-[100%]">
    <SidebarInstituition/>
    <ListInstituition />
  </div>
);

export default InstitutionColaborador;
