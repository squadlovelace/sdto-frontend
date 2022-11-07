import React from 'react';

import Form from '../CadInst/form';

const ButtonForm = () => (
  <button
    onClick={Form}
    type="button"
    className="flex flex-row justify-center items-center px-2 py-3 gap-2 w-80 h-12 bg-roxo65 rounded-3xl font-text font-normal text-x2 text-white "
  >
    Confirmar e Continuar
  </button>
);

export default ButtonForm;
