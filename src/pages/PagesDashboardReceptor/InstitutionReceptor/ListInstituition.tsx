import React from 'react';

import ItemInstituition from './ItemInstituition';

const ListInstituition = () => (
  <div className="mt-[140px] flex flex-col flex-1 pr-[225px]">
    <h1 className="border-b boder-[#bdbdbd] font-inter font-semibold text-[18px] leading-[28px] text-roxo800 pb-[22px]">
      Lista de Instituições
    </h1>

    <div>
      <ItemInstituition
        letterInstituition="LO"
        intituition="Hospital Lovelace"
        emailInstrituition="lovelace@lovelace.com.br"
      />
      <ItemInstituition
        letterInstituition="HO"
        intituition="Hospital São José"
        emailInstrituition="hospitalsaojose@email.com.br"
      />
      <ItemInstituition
        intituition="Maria das graças"
        emailInstrituition="mariadasgracas@email.com.br"
        letterInstituition="MA"
      />
    </div>
  </div>
);

export default ListInstituition;
