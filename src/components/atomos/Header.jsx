import Logo from '../../assets/img/axa-768.svg'
import '../../assets/Styles/Header.css'

function Header() {
    return ( 
        <>

        <header>
            <img src={Logo} alt="fotologo" />
        </header>
        </>
     );
}

export default Header;