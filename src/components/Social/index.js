import "./styles.css";
import {FiInstagram} from "react-icons/fi";
import {BsLinkedin, BsGithub} from "react-icons/bs";

export default function Social(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/"><FiInstagram size={30}/>  </a>
            <a href="https://www.linkedin.com/in/israel-almeida-6b914856/"><BsLinkedin size={30}/></a>
            <a href="https://github.com/"> <BsGithub size={30}/></a>
        </div>
    )
}