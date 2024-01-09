import './Services.scss'
import desing from './assets/design.png'
import vector from './assets/vector.png'

function Services() {
    return (
        <>
            <div className='body'>
                <div id="services" className="services-container">
                    <div className="name-container">
                        <h2>Serviços</h2>
                    </div>
                    <div className="services-items">
                        <div className="services">
                            <div className="img-place">
                                <img src={vector} />
                            </div>
                            <div className="services-text">
                                <h3>Design Gráfico</h3>
                                <h4>Design para impulsionar o seu negócio no mercado</h4>
                            </div>
                        </div>
                        <div className="services">
                            <div className="img-place">
                                <i className="bi bi-code-slash"></i>
                            </div>
                            <div className="services-text">
                                <h3>UI/UX Design</h3>
                                <h4>Design de interface de experiência de usuário
                                    para aplicações</h4>
                            </div>
                        </div>
                        <div className="services">
                            <div className="img-place">
                                <img src={desing} />
                            </div>
                            <div className="services-text">
                                <h3>WEB Design</h3>
                                <h4>Design de paginas web para melhores sites para
                                    empresas e negócios</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services