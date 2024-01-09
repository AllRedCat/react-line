import './Jobs.scss'
import { useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import ProductPreview from './assets/Product-Preview.png'
import QRCode from './assets/QR code componen.png'
import RegisterPage from './assets/Register home page.png'
import { Navigation } from 'swiper/modules'

function Jobs() {

    useEffect(() => {

        new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            modules: [Navigation],

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            effect: 'coverflow',
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },
        });
    })

    return (
        <section id="portfolio" className="jobs-container">
            <div className="name-container">
                <h2>Ultimos trabalhos</h2>
            </div>
            <div className="jobs-items">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href="https://allredcat.github.io/Product-preview/">
                                <img src={ProductPreview} alt="slide-1" className='slide-img' />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://allredcat.github.io/HomePageCadas/">
                                <img src={RegisterPage} alt="slide-2" className='slide-img' />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://allredcat.github.io/QR-code-component/">
                                <img src={QRCode} alt="slide-3" className='slide-img' />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                </div>
            </div>
        </section>
    );
}

export default Jobs