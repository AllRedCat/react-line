import { useState } from 'react'
import './Home.scss'
import desingImg from './assets/design illustration.svg'

function Home() {
    const [showHome, setShowHome] = useState(true)
    const [showForm, setShowForm] = useState(false)

    function ContactButton() {

        function SwitchScreen() {
            if (showHome) {
                setShowHome(false)
                setShowForm(true)
            }
            else {
                setShowHome(true)
                setShowForm(false)
            }
        }

        return (
            <button onClick={SwitchScreen} className="contact-btn">Contate-me</button>
        );
    }

    function FormPage() {
        return (
            <>
                Here goes the form
                <ContactButton />
            </>
        );
    }

    function HomePage() {
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


    return (
        <>
            {showHome && <HomePage />}
            {showForm && <FormPage />}
        </>
    );
}

export default Home