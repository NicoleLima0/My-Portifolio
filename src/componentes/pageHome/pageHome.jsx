import "./pageHome.css";
import imgProfile from "../../assets/images/Nicole.jpeg";

export default function PageHome() {
  const curriculoPDF =
    "https://drive.google.com/file/d/1GHEA_qgQC9rVB4Dkj-Pn7diodAssf3B_/view?usp=drivesdk";

  const redirectCurriculo = () => {
    window.open(curriculoPDF, "_blank");
  };

  return (
    <>
      {" "}
      <div className="container" id="id-pageHome">
        <div className="title">Oie, meu nome é </div>
        <div className="name">Nicole Carvalho Lima Martins</div>
        <div className="subTitle">
          Tenho 21 anos e moro em Teresópolis, no Rio de Janeiro. Atualmente,
          estou no segundo período do curso de Análise e Desenvolvimento de
          Sistemas, uma área muito interessante que despertou minha paixão pela
          tecnologia.
          <div className="subTitle2">Desenvolvedora front-end</div>A
          oportunidade de criar interfaces visuais de aplicativos e sites,
          tornando-os atraentes, intuitivos e funcionais para os usuários é
          incrível. Uma interface bem projetada e amigável pode fazer toda a
          diferença na experiência do usuário, influenciando diretamente a forma
          como eles interagem com o produto ou serviço. Ser capaz de criar
          interfaces intuitivas e agradáveis proporciona um impacto positivo na
          satisfação do usuário e no sucesso do projeto como um todo.
        </div>
        <div className="divButton">
          <button onClick={redirectCurriculo} className="buttonCurriculo">
            <span>Ver currículo</span>
          </button>
        </div>
      </div>
      <div className="cardDiv">
        <img src={imgProfile} className="picture" alt="profile" />
      </div>
    </>
  );
}
