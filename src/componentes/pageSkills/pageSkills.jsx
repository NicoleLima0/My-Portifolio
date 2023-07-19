import "./pageSkills.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import imgJs from "../../assets/images/javascript.jpg";
import imgReact from "../../assets/images/react.png";
import imgHtml from "../../assets/images/html.png";
import imgCss from "../../assets/images/css.png";
import imgSQL from "../../assets/images/SQL.png";
import imgGit from "../../assets/images/Git.png";

export default function PageSkills() {
  return (
    <>
      <div className="titleSkills" id="id-skills">
        <h1> Minhas hard skills </h1>
      </div>
      <div className="skillsComplete">
        <div className="cardSkills">
          <div className="js">
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgJs} alt="Javascript" className="pictureJs" />
                </CardMedia>
                <CardContent>
                  <div className="skillsTitle">JavaScript</div>
                  <div className="textSkills">
                    Desenvolvimento Web Front-End - <br /> Manipulação do DOM -
                    Programação Orientada a Objetos - Manipulação de eventos -
                    Resolução de problemas - Boas práticas de Desenvolvimento.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="react">
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgReact} alt="React" className="pictureSkills" />
                </CardMedia>
                <CardContent>
                  <div className="skillsTitle">React</div>
                  <div className="textSkills">
                    Ferramentas de Desenvolvimento - Desenvolvimento de
                    Componentes - Familiaridade com a sintaxe JSX - Estado.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="sql">
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgSQL} alt="SQL" className="pictureSkills" />
                </CardMedia>
                <CardContent>
                  <div className="skillsTitle">SQL</div>
                  <div className="textSkills">
                    {" "}
                    Manipulação de dados - Consultas SELECT - Criação e
                    modificação de tabelas - Funções de agregação.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div className="cardSkills2">
          <div className="html">
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgHtml} alt="HTML" className="pictureSkills" />
                </CardMedia>
                <CardContent>
                  <div className="skillsTitle">HTML</div>
                  <div className="textSkills">
                    Organização Lógica e Semântica - Acessibilidade Web -
                    Estruturação de Páginas - Tags e Atributos - Elementos
                    Multimídia - Links e Navegação.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="css">
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgCss} alt="CSS" className="pictureSkills" />
                </CardMedia>
                <CardContent>
                  <div className="skillsTitle">CSS</div>
                  <div className="textSkills">
                    Criação de layouts responsivos - Design Visual -
                    Acessibilidade - Resolução de Problema - Otimização de
                    Desempenho - CSS3 Transitions e Animations.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="git">
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgGit} alt="Git" className="pictureSkills" />
                </CardMedia>
                <CardContent>
                  <div className="skillsTitle">GIT</div>
                  <div className="textSkills">
                    Controle de Versões - Branchs e Merges - Repositórios
                    Remotos - Commits.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}