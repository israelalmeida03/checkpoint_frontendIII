import "./styles.css";
import {BsGithub} from "react-icons/bs";
import {DiAndroid, DiHtml5, DiCss3, DiJava ,DiReact,  DiMysql, DiMsqlServer} from "react-icons/di";
import {SiJavascript,SiDocker, SiFirebase } from "react-icons/si";
import {FaAws} from "react-icons/fa";


export default function Skills(){
    return(

        <fieldset> 
            <legend>Skills</legend>
            <div className="skills-container" id="skills">
        <div className="grid">
        <span>
          <i><DiJava size={50}/></i>
          <p>Java</p>
        </span>
        <span>
          <i><DiAndroid size={50}/></i>
          <p>Android</p>
        </span>
        <span>
          <i><DiHtml5 size={50}/></i>
          <p>Html 5</p>
        </span>
        <span>
          <i><DiCss3 size={50}/></i>
          <p>CSS3</p>
        </span>
        <span>
          <i><SiJavascript size={50}/></i>
          <p>Javascript</p>
        </span>
        <span>
          <i><DiReact size={50}/></i>
          <p>React</p>
        </span>
        <span>
          <i><DiMysql size={50}/></i>
          <p>MySQL</p>
        </span>
        <span>
          <i><BsGithub size={50}/></i>
          <p>Github</p>
        </span>
        <span>
          <i><SiDocker size={50}/></i>
          <p>Docker</p>
        </span>
        <span>
          <i><FaAws size={50}/></i>
          <p>AWS</p>
        </span>
        </div>
      </div>
        </fieldset>
    );
}