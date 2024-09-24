import styleNavbar from "./NavbarStyle.module.css"
import logoApm from "../img/logoDoeApm.png"
import {Swiper, SwiperSlide}  from "swiper/react"
import Footer from "./Footer"

import { Link } from "react-router-dom"
const Navbar = () => {
    const data = [
        { id: "1", image: "https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png" },
        { id: "2", image: "https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png" },
      ];
 
    return (
    <>
        <nav className={styleNavbar.nav}>
            <div className={styleNavbar.img}>
                    <img src={logoApm} alt="img" />
            </div>
            <ul className={styleNavbar.list}>
                <li><Link>About</Link></li>
                <li><Link>Fale Conosco</Link></li>
                <li><Link>Contacts</Link></li>
                <li><Link to="/homeUser" className={styleNavbar.buttonEnter}>Entrar</Link></li>
            </ul>
        </nav>
        <div className={styleNavbar.containerSpace}>
            
            
            <div  className={styleNavbar.div1}>
                <div className={styleNavbar.divfilha}>
                   <Swiper
                   slidesPerView={1}
                   pagination={{clickable: true}}
                   navigation
                   >
                   {data.map((item) =>(
                    <SwiperSlide>
                        <img src={item.image} alt="image" 
                        className="slide-item"/>
                        </SwiperSlide>
                    ))}
                   </Swiper>
                </div>
            </div>


            <div  className={styleNavbar.div2}>
                    <div className={styleNavbar.divh1}>
                            <h1>Qual o intuito da APM?</h1>
                    </div>
                    <div className={styleNavbar.divp}>
                        <p>A Associação de Pais e mestres tem por finalidade colaborar na assistência do educando, promovendo a aproximação e a integração entre a comunidade escolar e a comunidade local.</p>
                       <div className={styleNavbar.divp2}>
                       <p>Ao realizar uma doação você estará contribuindo para aquisição de materiais necessários para o bem dos alunos e um melhor ensino, você também poderá contribuir em eventos internos para a comemoração de alunos.</p>
                       </div>
                    </div>
                    <div className={styleNavbar.divButtonEnterNow}>
                        <button type="submit" className={styleNavbar.buttonEnterNow}><Link to="/homeUser">Comece agora</Link></button>
                    </div>
                    <div>
                        <ul className={styleNavbar.listIcons}>
                           <li> <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>Facebook</li>
                        <li>   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                         <i className="fab fa-instagram"></i>
                        </a>Instagram </li> 
                        <li> <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                        </a> Twitter</li>
                        </ul>
                    </div>
            </div>
        </div>
        <Footer></Footer>
    </>
  )
}
export default Navbar