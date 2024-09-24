import styleFooter from "./StyleFooter.module.css"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
   <footer>
     <div className={styleFooter.footerContainer}>
            <div className={styleFooter.socialIcons}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i> 
                    </a>
                
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> 
                    </a>
                
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i> 
                    </a>
            </div>
            <div className={styleFooter.footerNav}>
                <ul>
                    <li><Link>Início</Link></li>
                    <li><Link>FIEB</Link></li>
                    <li><Link>Fale Conosco</Link></li>
                    <li><Link>Equipe</Link></li>
                    
                </ul>
            </div>
          
    </div>
    <div className={styleFooter.footerBottom}>
                <p>CopyRight &Copy;</p>
            </div>
   </footer>
  )
}

export default Footer