import React from 'react';
import SidebarDoador from '../../../components/sidebar/sidebardoador';


import ListInstituition from './ListInstituition';

const InstitutionDoador = () => (
  <div className="flex gap-[90px] w-[100%]">
    <SidebarDoador />
    <ListInstituition />
  </div>
);

export default InstitutionDoador;
