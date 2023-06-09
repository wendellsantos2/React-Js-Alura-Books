 
import './App.css';
 
import Logo from './componentes/Logo'
import perfil from  './componentes/Logo'
import sacola from './componentes/Logo'
const textoOpcoes= ['CATEGORIAS','FAVORITOS','MINHA ESTANTE']
const icones =[perfil,sacola]
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
 
      <ul className='opcoes'>
      <Logo></Logo>
      { textoOpcoes.map( (texto) => (
        <li className='opcao'><p>{texto}</p></li>
      ))}
      </ul>
       <ul className='icones'>
       {icones.map((icone) => (
        <li><img src={icone}></img></li>
       ))}
       </ul>
      </header> 
    </div>
  );
}

export default App;
