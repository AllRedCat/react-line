import './Home.css'

function ContactButton() {
    return (
        <button id="myButton" className="contact-btn">Contate-me</button>
    );
}

function Home() {
    return (
        <div className="hi-container">
            <div className="hi">
                <div className="hello">
                    <h5>Olá</h5>
                </div>
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
            <div className='my-img'></div>
        </div>
    );
}

export default Home