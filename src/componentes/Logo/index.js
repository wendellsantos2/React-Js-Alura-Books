 import logo from '../../images/1.png'
 import './estilo.css'
 function Logo(){
    return (
        <div className='logo'>
        <img src={logo} alt='logo' width= '5%' height='5%' className='logo-img'></img>
        <p><strong>Alura Books</strong></p>
       </div>
    )
 }

export default Logo;