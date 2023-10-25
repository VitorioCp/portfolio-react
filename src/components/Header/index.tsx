import { HeaderPag } from "./styles";
import IconGitHub from "../../../public/icons8-github-90.png"
import IconLinkedin from "../../../public/icons8-linkedin-100.png"
import IconEmail from "../../../public/icons8-email-100.png"
export function Header() {
  return (
    <HeaderPag>
        <header>
            <div className="navbar">
                <div className="logo"><p>WEB<span>VIT</span></p></div>
                <ul className="links">
                    <li>
                        <a href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#porfolio">PORTIFÓLIO</a>
                    </li>
                    <li>
                        <a href="#contato">CONTATO</a>
                    </li>
                    <li>
                        <a href="#sobre">SOBRE</a>
                    </li>
                </ul>
                <div className='socias-media'>
                    <a href="https://www.linkedin.com/in/vitorio-correa/">
                        <img src={IconLinkedin} alt="Icone Linkedin"/>
                    </a>
                    <a href="https://github.com/VitorioCp">
                        <img src={IconGitHub} alt="Icone GitHub" />
                    </a>
                    
                    <a href="mailto:vitcorreapereira@hotmail.com">
                        <img src={IconEmail} alt="Icone Email" />
                    </a>
                    
                </div>
            </div>
        </header>
    </HeaderPag>
  )
}