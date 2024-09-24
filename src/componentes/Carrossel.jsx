import style from "./CarrosselStyle.module.css"
import { Link } from "react-router-dom"
import carteira from "../img/carteira.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carrossel =() =>{
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <>
      <Carousel responsive={responsive}>
      <div className={style.container}>
                <div className={style.card}>
                    <ul className={style.cardList}>
                        <li className={style.cardItem}>
                            <Link className={style.cardLink}>
                            <img src={carteira} alt="" className={style.cardImage}/>
                            <p className={style.badge}>Carteira</p>
                            <h2 className={style.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate neque dolore laborum omnis quis error earum doloremque officiis? Aliquam nihil corporis eos voluptate, adipisci assumenda sint quo quam architecto.</h2>
                            <div className={style.cardArrow}>
                            <span className={style.cardArrow}> <FontAwesomeIcon icon={faArrowRight} /></span>
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
                            <h2 className={style.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate neque dolore laborum omnis quis error earum doloremque officiis? Aliquam nihil corporis eos voluptate, adipisci assumenda sint quo quam architecto.</h2>
                            <div className={style.cardArrow}>
                            <span className={style.cardArrow}> <FontAwesomeIcon icon={faArrowRight} /></span>
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
                            <h2 className={style.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate neque dolore laborum omnis quis error earum doloremque officiis? Aliquam nihil corporis eos voluptate, adipisci assumenda sint quo quam architecto.</h2>
                            <div className={style.cardArrow}>
                            <span className={style.cardArrow}> <FontAwesomeIcon icon={faArrowRight} /></span>
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
                            <h2 className={style.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate neque dolore laborum omnis quis error earum doloremque officiis? Aliquam nihil corporis eos voluptate, adipisci assumenda sint quo quam architecto.</h2>
                            <div className={style.cardArrow}>
                            <span className={style.cardArrow}> <FontAwesomeIcon icon={faArrowRight} /></span>
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
                            <h2 className={style.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate neque dolore laborum omnis quis error earum doloremque officiis? Aliquam nihil corporis eos voluptate, adipisci assumenda sint quo quam architecto.</h2>
                            <div className={style.cardArrow}>
                            <span className={style.cardArrow}> <FontAwesomeIcon icon={faArrowRight} /></span>
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
                            <h2 className={style.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate neque dolore laborum omnis quis error earum doloremque officiis? Aliquam nihil corporis eos voluptate, adipisci assumenda sint quo quam architecto.</h2>
                            <div className={style.cardArrow}>
                            <span className={style.cardArrow}> <FontAwesomeIcon icon={faArrowRight} /></span>
                            </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
    </Carousel>;
        </>
    )
}
export default Carrossel