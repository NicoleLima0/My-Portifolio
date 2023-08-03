import "./pageProjects.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import imgAfacil from "../../assets/images/afacil.png";
import imgApi from "../../assets/images/API.png";
import imgCrud from "../../assets/images/CRUD.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function PageProjects() {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedApi, setExpandedApi] = React.useState(false);
  const [expandedCrud, setExpandedCrud] = React.useState(false);
  const [iconClicked, setIconClicked] = React.useState(false);
  const [iconClickedApi, setIconClickedApi] = React.useState(false);
  const [iconClickedCrud, setIconClickedCrud] = React.useState(false);
  const urlAfacil = "https://afacil-seguros.vercel.app/";
  const urlApi = "https://integracao-de-api.vercel.app/";
  const urlCrud = "https://to-do-list-nicolelima0.vercel.app/";

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClickApi = () => {
    setExpandedApi(!expandedApi);
  };

  const handleExpandClickCrud = () => {
    setExpandedCrud(!expandedCrud);
  };

  const ExpandMore = styled((props) => {
    const { ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  function clickProjectAfacil() {
    window.open(urlAfacil, "_blank");
  }

  function clickProjectApi() {
    window.open(urlApi, "_blank");
  }

  function clickProjectCrud() {
    window.open(urlCrud, "_blank");
  }

  function changeColor() {
    setIconClicked(!iconClicked);
  }

  function changeColorApi() {
    setIconClickedApi(!iconClickedApi);
  }

  function changeColorCrud() {
    setIconClickedCrud(!iconClickedCrud);
  }

  return (
    <>
      <div id="id-projects">
        <div className="titleSkillsProjects">
          <h1> Meus Projetos </h1>
        </div>
        <div className="cardsProjects">
          <div className="divCard">
            <Card sx={{ maxWidth: 345 }} className="cardProjects">
              <CardHeader title="Projeto AFACIL" />
              <CardMedia>
                <img src={imgAfacil} className="picAfacil" alt="AFACIL" />
              </CardMedia>
              <CardContent>
                <div className="descricao">
                  <p>
                    Meu primeiro projeto, um site para corretora de seguros
                    (HTML5 e CSS3).
                  </p>
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={changeColor}>
                  <FavoriteIcon
                    className={iconClicked ? "iconHeartClick" : ""}
                  />
                </IconButton>
                <IconButton
                  aria-label="link-external"
                  onClick={clickProjectAfacil}
                >
                  <OpenInNewIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Durante o desenvolvimento do projeto, o principal objetivo
                    foi criar uma experiência web única e totalmente responsiva
                    que consiste em um site para demonstração da empresa e venda
                    de seguros, oferecendo aos visitantes a oportunidade de
                    conhecer melhor a empresa e entrar em contato. <br />
                    Através desse projeto sinto que consegui expandir meus
                    conhecimentos e habilidades como desenvolvedora. Fui
                    desafiada a explorar minha criatividade ao assumir a
                    responsabilidade pelo design e seleção de imagens, também
                    pude colocar em prática os conhecimentos adquiridos em
                    cursos, aplicando técnicas avançadas de HTML5 e CSS3 para
                    desenvolver uma interface moderna e intuitiva.{" "}
                    <p>
                      {" "}
                      Durante o processo, enfrentei diversos desafios que
                      exigiram soluções criativas. Com determinação e
                      persistência, superei obstáculos e aprendi a lidar com
                      diferentes cenários de desenvolvimento, aprimorando minha
                      capacidade de solucionar problemas.
                    </p>{" "}
                    Fiquei orgulhosa do resultado e foi uma experiência
                    enriquecedora, que me proporcionou um crescimento
                    significativo como profissional.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div className="divCard2">
            <Card sx={{ maxWidth: 345 }} className="cardProjects">
              <CardHeader title="Projeto Integração de API" />
              <CardMedia>
                <img src={imgApi} className="picApi" alt="API" />
              </CardMedia>
              <CardContent>
                <div className="descricao">
                  <p>
                    Projeto onde explorei a integração de API (JavaScript, HTML5
                    e CSS3).
                  </p>
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={changeColorApi}
                >
                  <FavoriteIcon
                    className={iconClickedApi ? "iconHeartClick" : ""}
                  />
                </IconButton>
                <IconButton
                  aria-label="link-external"
                  onClick={clickProjectApi}
                >
                  <OpenInNewIcon />
                </IconButton>
                <ExpandMore
                  expand={expandedApi}
                  onClick={handleExpandClickApi}
                  aria-expanded={expandedApi}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expandedApi} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    O projeto foi baseado em uma aplicação 100% responsiva que
                    permite verificar o clima de qualquer cidade, onde utilizei
                    a Weather API. <br /> Desde o início de minha jornada como
                    desenvolvedora, compreendi a relevância de projetos que
                    envolvem a integração de API. Esse tipo de abordagem permite
                    estabelecer interfaces de comunicação, possibilitando a
                    utilização de funcionalidades de outros sistemas ou do mesmo
                    sistema em diferentes camadas. <br /> Ao trabalhar com a
                    integração da Weather Api, enfrentei desafios estimulantes
                    que me levaram a um aprendizado significativo. Fui desafiada
                    a entender a documentação da API, compreender seus endpoints
                    e parâmetros, aprender como interpretar e processar os
                    dados recebidos. Essa experiência me proporcionou uma visão
                    mais aprofundada do trabalho com APIs, bem como me permitiu
                    desenvolver uma compreensão sólida sobre como consumir
                    informações externas em meus projetos.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div className="divCard3">
            <Card sx={{ maxWidth: 345 }} className="cardProjects">
              <CardHeader title="Projeto CRUD" />
              <CardMedia>
                <img src={imgCrud} className="picCrud" alt="CRUD" />
              </CardMedia>
              <CardContent>
                <div className="descricao">
                  <p>
                    Gerenciamento de tarefas utilizando CRUD (JavaScript, HTML5,
                    CSS3).
                  </p>
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={changeColorCrud}
                >
                  <FavoriteIcon
                    className={iconClickedCrud ? "iconHeartClick" : ""}
                  />
                </IconButton>
                <IconButton
                  aria-label="link-external"
                  onClick={clickProjectCrud}
                >
                  <OpenInNewIcon />
                </IconButton>
                <ExpandMore
                  expand={expandedCrud}
                  onClick={handleExpandClickCrud}
                  aria-expanded={expandedCrud}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expandedCrud} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Nesse projeto desenvolvi um gerenciamento de tarefas
                    completo, utilizando as funcionalidades do CRUD (Create,
                    Read, Update e Delete) traduzindo, é um sistema que permite
                    criar, ler, atualizar e excluir informações em um banco de
                    dados.
                    <br /> Uma das características interessantes desse projeto é
                    que todas as informações são armazenadas no LocalStorage do
                    navegador. Essa abordagem permite que os dados sejam
                    mantidos mesmo após o fechamento do navegador, oferecendo
                    uma experiência contínua e conveniente para os usuários.
                    <br /> O desenvolvimento do CRUD foi uma etapa crucial em
                    minha trajetória como desenvolvedora. Reconheço que o CRUD é
                    uma das bases fundamentais da programação web e é amplamente
                    utilizado em diversos projetos. Através desse projeto,
                    aprofundei meu conhecimento sobre o conceito de CRUD e pude
                    colocar em prática as melhores práticas de implementação.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
