import { useState } from 'react'
import React from 'react'
import './Home.scss'
import desingImg from './assets/design illustration.svg'

function Home() {
    const [showHome, setShowHome] = useState(true)
    const [showForm, setShowForm] = useState(false)

    // Botão responsavel pela troca de paginas
    // Nota: Configurar estilo para melhor reutilização
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
    // function ContactButton() {


    //     return (
    //         <button onClick={SwitchScreen} className="contact-btn">Contate-me</button>
    //     );
    // }

    // Aqui vai o formulário
    function FormPage() {
        const onSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);

            formData.append("access_key", "39f25c44-4018-4d36-a260-6ef128baa63a");

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                console.log("Success", res);
            }
        };

        return (
            <div className='form-body'>
                <form onSubmit={onSubmit}>
                    <label>Nome
                        <input type="text" name="name" />
                    </label>
                    <label>Email
                        <input type="email" name="email" />
                    </label>
                    <textarea name="message"></textarea>
                    <button type="submit" className='btn-submit'>Enviar</button>
                    <button onClick={SwitchScreen} className='back-btn'>Voltar</button>
                    {/* <ContactButton /> */}
                </form>
            </div>
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
                        <button onClick={SwitchScreen} className="contact-btn">Contate-me</button>
                        {/* <ContactButton /> */}
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