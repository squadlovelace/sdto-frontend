import SidebarDoador from '../../../components/sidebar/sidebardoador';
import SectionInfo from './SectionInfo';

const DashboardDoador = () => (
  <section className="flex gap-[90px]">
    <SidebarDoador />;
    <SectionInfo />
  </section>
);

export default DashboardDoador;
