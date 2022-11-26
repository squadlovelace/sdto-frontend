import axios from 'axios';

const api = axios.create({
  baseURL: 'http://wellingtonmenezes.com.br:3000/api/v1/',
});

export const useApi = () => ({
  signin: async (cpf: string, password: string) => {
    const response = await api.post('/auth/signin', { cpf, password });
    return response.data;
  },
  createReceiver: async () => {
    const receptorStep1 = JSON.parse(
      localStorage.getItem('@receptor-step-1') ?? ''
    );
    const receptorStep2 = JSON.parse(
      localStorage.getItem('@receptor-step-2') ?? ''
    );
    const receptorStep3 = JSON.parse(
      localStorage.getItem('@receptor-step-3') ?? ''
    );

    // limpa campos
    localStorage.setItem('@receptor-step-1', "");
    localStorage.setItem('@receptor-step-2', "");
    localStorage.setItem('@receptor-step-3', "");

    console.log(receptorStep1);
    console.log(receptorStep2);
    console.log(receptorStep3);

    const bodyData = {
      email: receptorStep1.email,
      name: receptorStep1.nome,
      password: receptorStep1.senha,
      rg: receptorStep1.rg,
      cpf: receptorStep1.cpf,
      phone: receptorStep2.telefone,
      birthDate: receptorStep2.datadenascimento,
      gender: receptorStep2.genero,
      bloodType: receptorStep3.tiposanguineo,
      organ: receptorStep3.orgao,
      address: {
        street: receptorStep2.endereco,
        number: 'SN',
        zipcode: receptorStep2.cep,
        neighborhood: 'Centro',
        city: receptorStep2.cidade,
        state: receptorStep2.uf,
        complement: receptorStep3.complemento,
      },
      rgct: receptorStep3.rgct,
      comorbidity: receptorStep3.comorbidade,
    };

    // dados de teste
    // const bodyData = {
    //   email: "maria@alu.ufc",
    //   name: "Fernanda",
    //   password: "1234",
    //   rg: "2014563451818",
    //   cpf: "0956456272",
    //   phone: "8598172172187",
    //   birthDate: "2000/06/20",
    //   gender: "F",
    //   bloodType: "A+",
    //   responsible: {
    //     name: "Maria",
    //     relationship: 'M',
    //   },
    //   organ: "Pulmão",
    //   address: {
    //     street: "Rua dois",
    //     number: "13",
    //     zipcode: "2029383888",
    //     neighborhood: '',
    //     city: "Fortaleza",
    //     state: "CE",
    //     complement: "B",
    //   },
    //   rgct: "22232656532323",
    //   comorbidity: "Teste",
    // };
    const response = await api.post('/receiver/signup/', bodyData);

    return response.data;

    console.log(response.data);
  },
  logout: async () => {
    const response = await api.post('/logout');
    return response.data;
  },
});
