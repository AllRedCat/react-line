import './Home.scss'
import desingImg from './assets/design illustration.svg'

function ContactButton() {
    return (
        <button className="contact-btn">Contate-me</button>
    );
}

function Home() {
    return (
        <div className="hi-container">
            <div className="hi">
                <h5 className='hello'>Olá</h5>
                <h2>Eu sou Gabriel</h2>
                <div className="redcat">
                    <h4>RedCat</h4>
                    <span className="material-symbols-outlined line">
                        minimize
                    </span>
                </div>
                <div className="designer">
                    <span className="material-symbols-outlined line">
                        minimize
                    </span>
                    <h4>Designer</h4>
                </div>
                <div className="button-space">
                    <ContactButton />
                </div>
            </div>
            <div className='my-img'>
                <img src={desingImg} alt="Design Illustration" />
            </div>
        </div>
    );
}

export default Home