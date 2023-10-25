import { HomeContainer } from "./styles";
// import FotoPerfil from '../../assets/foto_home.jpg'
import { SkillsLanguage } from "../../components/SkillsLanguage";
import { Header } from "../../components/Header";

export function Home() {
    return (
        <HomeContainer>
            <div id="home">
                <Header/>
                <div className="containerHome">
                    <div className="box-1">
                        <h1>EU SOU<br></br><span> VITÓRIO CORREA</span></h1>
                        <span></span>
                        <p>Me chamo Vitório sou estudante de engenharia de software pela USANE atualmente no segundo período</p>
                    </div>
                    <div className="box-2">
                        {/* <img src={FotoPerfil} alt="" width={150} /> */}
                        <div className="text-info">
                            <h1>SERVIÇOS</h1>
                            <p>Vamos criar um site em React totalmente personalizável para você</p>
                            <a href="">Saber mais</a>
                        </div>

                    </div>
                </div>
                <SkillsLanguage/>
            </div>
        </HomeContainer>
    )
}