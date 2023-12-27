import './Services.scss'

function Services() {
    return (
        <div id="services" className="services-container">
            <div className="name-container">
                <h2>Serviços</h2>
            </div>
            <div className="services-items">
                <div className="services">
                    <div className="img-place">
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
                    </div>
                    <div className="services-text">
                        <h3>WEB Design</h3>
                        <h4>Design de paginas web para melhores sites para
                            empresas e negócios</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services