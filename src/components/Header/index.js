import "./styles.css";
import logo from "../../assets/favicon.ico";

export default function Header(){

     // function scrollToProjects(){
     //    document.getElementById('projects').scrollIntoView()
    // }

    function scrolltoComponent(id){
        document.getElementById(id).scrollIntoView();
    }


    return (
        <header>
            <img src= {logo}/>

            <ul className="menu">
                <li className="item-menu" onClick={() => scrolltoComponent("projects")}>Projetos</li>
                <li className="item-menu" onClick={() => scrolltoComponent("skills")}>Ferramentas</li>
                <li className="item-menu" onClick={() => scrolltoComponent("about")}>Sobre</li>
            </ul>
        </header>
    )
}