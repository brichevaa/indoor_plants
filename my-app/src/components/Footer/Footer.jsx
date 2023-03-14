import { Logo } from '../Header/Logo/Logo';
import './footer.css';
import logoTelegram from './telegram.svg';
import logoWhatsapp from './whatsapp.svg';
import logoPhone from './phone.svg';
import logoInstagram from './instagram.svg';
import logoVK from './vk.svg';

import { Link } from 'react-router-dom';

export const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="footer__contact contact-hero">
               <div className="contact-hero__item-one">
                  <Logo />

                  <div className="footer__c">
                     © «Интернет-магазин indoorplants.ru»
                  </div>
               </div>
               <div className="contact-hero__item">
                  <div className="footer__title">
                     <div className="footer__title-text">
                        <a href="/">Каталог</a>
                     </div>
                     <div className="footer__title-text">
                        <a href="/">Акции</a>
                     </div>
                     <div className="footer__title-text">
                        <a href="/">Новости</a>
                     </div>
                     <div>
                        <a href="/">Отзывы</a>
                     </div>
                  </div>
               </div>
               <div className="contact-hero__item">
                  <div className="footer__title">
                     <div className="footer__title-text">
                        <a href="/">Оплата и доставка</a>
                     </div>
                     <div className="footer__title-text">
                        <Link to={'/faq'}>Часто спрашивают</Link>
                     </div>
                     <div className="footer__title-text">
                        <a href="/">Обратная связь</a>
                     </div>
                     <div>
                        <a href="/">Контакты</a>
                     </div>
                  </div>
               </div>
               <div className="contact-hero__item contact-hero__item-last">
                  <h3>
                     <b>Мы на связи</b>
                  </h3>
                  <h3>
                     <b>8 (999) 00-00-00</b>
                  </h3>
                  <p>indoorplants@gmail.com</p>
                  <div className="contact-hero__icons ">
                     <a href="/">
                        <img src={logoTelegram} alt="logo telegram" />
                     </a>
                     <a href="/">
                        <img src={logoWhatsapp} alt="logo whatsapp" />
                     </a>
                     <a href="/">
                        <img src={logoPhone} alt="logo phone" />
                     </a>
                     <a href="/">
                        <img src={logoInstagram} alt="logo instagram" />
                     </a>
                     <a href="/">
                        <img src={logoVK} alt="logo vk" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
