import container from "./ContainerLogin.module.css"
import MyImage from "../img/logo.png"
import LogoTopDecoration from "../img/LogoTopDecoration.png"

import { Link } from "react-router-dom"
const HomeUser = () => {
  return (
    <>
     <div className={container.containerGlobal}>
          <div className={container.container}>
          <div className={container.topDecoration}>
                <img src={LogoTopDecoration} alt="" />
            </div>
          <div className={container.borderImage}>
                  <img src={MyImage} alt="logo" /> 
              </div>
          </div>
         <div className={container.div2}>
            <div>
                <h1>Bem-vindo(a)!</h1>
            </div>
            <div>
            <p>Neste espaço, você terá acesso a informações acadêmicas e poderá utilizar diversos serviços disponíveis para os nossos alunos.</p>
            </div>
            <div className={container.buttons}>
                <div>
                    <p>Sou aluno</p>
                    <Link to="/loginPage"><button>Entrar</button></Link>
                </div>
                <div className={container.divFunc}>
                   <p>Sou funcionário</p>
                    <Link to="/loginFunc"><button>Entrar</button></Link>
                </div>
            </div>
            
         </div>

        </div>
    </>
  )
}

export default HomeUser