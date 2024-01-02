import './About.scss'
import notebookImg from './assets/notebook.svg'
import pencil from './assets/design.png'
import graphicDesign from './assets/vector.png'

function About() {
    return (
        <section id="about" className="about-container">
            <div className="my-img-2">
                <img src={notebookImg} alt="about illustration" />
            </div>
            <div className="about">
                <h2>Sobre mim</h2>
                <div className="about-text">
                    <h4>Sou Designer Gráfico e Web Designer, trabalho com
                        soluções de Design para web sites e social
                        mídia.</h4>
                </div>
                <div className="ilust-container">
                    <img src={pencil} className='ilus' />
                    <i className="bi bi-code-slash"></i>
                    <img src={graphicDesign} className='ilus' />
                </div>
            </div>
        </section>
    );
}

export default About