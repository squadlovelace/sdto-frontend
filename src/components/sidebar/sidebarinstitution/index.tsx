import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/logoFormAccess.png';
import Avatar from '../Avatar';
import Itemsside from '../itemsside';
import ItemEmployee from './itemEmployee';

const SidebarInstituition = () => (
  <section className="bg-white rounded-[7px] border-[1px] border-solid border-[#d0d5dd] px-9 py-8  my-[30px] ml-[30px]  w-[280px] h-[calc(100vh-60px)]">
    <Link to="/">
      <img src={Logo} alt="logo do sdto" />
    </Link>
    <div className="flex flex-col mt-[120px] gap-4 mb-[570px]">
      <Itemsside
        icon={<EditIcon />}
        text="Editar perfil"
        url="/editperfilreceptor"
      />

      <ItemEmployee icon={<ContentPasteIcon />} text="Colaborador" />
    </div>
    <Avatar initalName="US" nameUser="USER" typeUser="Receptor" />
  </section>
);

export default SidebarInstituition;
