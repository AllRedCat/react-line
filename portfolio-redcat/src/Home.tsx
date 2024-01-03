import { useState } from 'react'
import './Home.scss'
import desingImg from './assets/design illustration.svg'

function Home() {
    const [showHome, setShowHome] = useState(true)
    const [showForm, setShowForm] = useState(false)

    // Botão responsavel pela troca de paginas
    // Nota: Configurar estilo para melhor reutilização
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

    // Aqui vai o formulário
    function FormPage() {
        const [name, setName] = useState("");
        const [password, setPassword] = useState("");

        function TestButton() {
            function Teste() {
                console.log(name, password)
            }

            return (
                <>
                    <button onClick={Teste}>teste (olha o console)</button>
                </>
            );
        }

        return (
            <>
                Here goes the form

                {/* Teste de formulário */}
                <form>
                    <label>Enter your name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>Enter Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </form>
                <TestButton />
                {/* Fim do teste */}

                <ContactButton />
            </>
        );
    }

    // Aqui é a pagina de introdução
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

    // Aqui é a parde onde renderiza o que vai ser visto
    return (
        <>
            {showHome && <HomePage />}
            {showForm && <FormPage />}
        </>
    );
}

export default Home