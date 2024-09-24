import styleItens from "./Itens.module.css";
import styleNavbar from "../componentes/NavbarStyle.module.css";
import logoApm from "../img/logoDoeApm.png";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import style from "../componentes/CarrosselStyle.module.css"
import carteira from "../img/carteira.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import QRCode from "react-qr-code"
import Footer from "../componentes/Footer";

const Itens = () => {

  
  
  return (
    <>
      <nav className={styleNavbar.nav}>
        <div className={styleNavbar.img}>
          <img src={logoApm} alt="img" />
        </div>
        <ul className={styleNavbar.list}>
       
          <li><Link>Fale Conosco</Link></li>
          
          <li><Link to="/registerPage" className={styleNavbar.buttonEnter}>Sou membro da APM</Link></li>
        </ul>
      </nav>
      <div className={styleItens.containerGlobal}>
        <div className={styleItens.div1}>
        
         
           
            <div className={style.container}>
                <div className={style.card}>
                    <ul className={style.cardList}>
                        <li className={style.cardItem}>
                            <Link className={style.cardLink}>
                            <img src={carteira} alt="" className={style.cardImage}/>
                            <p className={style.badge}>Carteira</p>
                            <h2 className={style.cardTitle}> Uma das nossas cadeiras, essencial para o aprendizado, está danificada e precisa de reparo. Essa cadeira é crucial para proporcionar conforto aos alunos durante as aulas.
                            Ajude-nos a recuperar essa cadeira e garantir um espaço mais confortável para todos!
                            </h2>
                            <div className={style.cardArrow}>
                            <Link to="/"><span className={style.cardArrow}> <FontAwesomeIcon icon={faArrowRight} /></span></Link>
                            </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.card}>
                    <ul className={style.cardList}>
                        <li className={style.cardItem}>
                            <Link className={style.cardLink}>
                            <img src={carteira} alt="" className={style.cardImage}/>
                            <p className={style.badge}>Carteira</p>
                            <h2 className={style.cardTitle}>A porta de nossa sala de aula está danificada e precisa de reparo. 
                            

                            Colabore conosco para reparar a porta e garantir um ambiente seguro e acolhedor!
                            Por que é importante? Uma porta em boas condições garante a segurança dos alunos e professores.
                            </h2>
                            <div className={style.cardArrow}>
                            <Link to="/"><span className={style.cardArrow2}> <FontAwesomeIcon icon={faArrowRight} /></span></Link>
                            </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>    
            <div className={style.container}>
                <div className={style.card}>
                    <ul className={style.cardList}>
                        <li className={style.cardItem}>
                            <Link className={style.cardLink}>
                            <img src={carteira} alt="" className={style.cardImage}/>
                            <p className={style.badge}>Carteira</p>
                            <h2 className={style.cardTitle}>
                         
                          Lousa Danificada - Sua Colaboração é Importante!
                          Descrição: Nossa lousa está danificada e precisa de reparo.
                          Uma lousa em boas condições é essencial para um aprendizado eficaz.
                            Ajude-nos a restaurar a lousa e a manter um ambiente de aprendizado produtivo!
                            </h2>
                            <div className={style.cardArrow}>
                            <Link to="/"><span className={style.cardArrow3}> <FontAwesomeIcon icon={faArrowRight} /></span></Link>
                            </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
           
   
        </div>
        <div className={styleItens.div2}>
            <div className={styleItens.h1}>
                <h1>Baixe agora nosso <span className={styleItens.app}>App</span> para fazer sua doação.</h1>
                <QRCode
                value="www.xvideos.com"
                className={styleItens.qrcode}
                />
                <div className={styleItens.button}>
                  <button>Ver todas necessidades</button>
                </div>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Itens;
