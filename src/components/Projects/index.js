import "./styles.css";

const data = [
    {
      id: "1",
      name: "Lorem Ipsum",
      link: "https://static.vecteezy.com/ti/vetor-gratis/p3/182698-projeto-de-modelo-de-ui-de-aplicativo-movel-vetor.jpg",
      image:
        "https://static.vecteezy.com/ti/vetor-gratis/p3/182698-projeto-de-modelo-de-ui-de-aplicativo-movel-vetor.jpg",
    },
    {
      id: "2",
      name: "Lorem Ipsum",
      link: "https://static.vecteezy.com/ti/vetor-gratis/p3/182698-projeto-de-modelo-de-ui-de-aplicativo-movel-vetor.jpg",
      image:
        "https://static.vecteezy.com/ti/vetor-gratis/p3/182698-projeto-de-modelo-de-ui-de-aplicativo-movel-vetor.jpg",
    },
    {
      id: "3",
      name: "Lorem Ipsum",
      link: "https://static.vecteezy.com/ti/vetor-gratis/p3/182698-projeto-de-modelo-de-ui-de-aplicativo-movel-vetor.jpg",
      image:
        "https://static.vecteezy.com/ti/vetor-gratis/p3/182698-projeto-de-modelo-de-ui-de-aplicativo-movel-vetor.jpg",
    },
    {
      id: "4",
      name: "Lorem Ipsum",
      link: "https://static.vecteezy.com/ti/vetor-gratis/p3/182698-projeto-de-modelo-de-ui-de-aplicativo-movel-vetor.jpg",
      image:
        "https://static.vecteezy.com/ti/vetor-gratis/p3/182698-projeto-de-modelo-de-ui-de-aplicativo-movel-vetor.jpg",
    },
    {
      id: "5",
      name: "Lorem Ipsum",
      link: "https://static.vecteezy.com/ti/vetor-gratis/p3/182698-projeto-de-modelo-de-ui-de-aplicativo-movel-vetor.jpg",
      image:
        "https://static.vecteezy.com/ti/vetor-gratis/p3/182698-projeto-de-modelo-de-ui-de-aplicativo-movel-vetor.jpg",
    },
  ];


export default function Projects(){
    return(
          <div className="content-projects" id = "projects">
            <h1 className="title-project">Projetos</h1>
            <ul className="list-projects">
                {
                  data.map(({image, name, link})=> (
                      <a href={link}> <li className="item-list-projects"> 
                          <img src={image} width={350}/>
                          <h3 className="name-project">{name}</h3>
                      </li></a>

                  ))  
                }
            </ul>    
        </div>        
    );
}

