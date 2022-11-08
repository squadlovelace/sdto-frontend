import elipse from './elipse.png';
import check from './check.png';

const Concluido = () => (
    <div style={{backgroundColor:"#672557"}}>
    <div className='container h-screen grid-cols-8 mx-auto pt-5 ' style={{backgroundColor:"#672557"}}>
      <div className='container'style={{marginLeft:"460px",}}>
      <img src={elipse} style={{position: 'absolute', zIndex: 0, marginLeft:"0px"}}></img>
      <img src={check} style={{position: 'absolute', zIndex: 0, marginLeft:"6px",marginTop:"2px"}}className=""></img>
      </div>
      <div className='wrap w-100 h-screen ml-70 'style={{backgroundColor:"#672557",paddingTop:"100px"}}>
        <h1 style={{color:"white",fontSize:"30px"}} className="pl-80">Obrigado por se cadastrar! </h1> <br />
        <p className='pl-60'style={{color:"white",fontSize:"18px"}}>Seu cadastro foi realizado com sucesso. Clique no botão abaixo  </p>
        <button
          style={{backgroundColor:"#672557"}}
          className="flex flex-row justify-center items-center mt-10 ml-80 gap-2 w-80 h-12 bg-white rounded-xl font-text font-normal text-x2 text-white ml-90"
                >
          <p style={{color:"#672557"}}>Continuar</p>
        </button>
      </div>
    </div>
  </div>
  );
  
  export default Concluido;