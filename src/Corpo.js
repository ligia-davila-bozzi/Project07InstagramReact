import Stories from "./Stories";
import Posts from "./Posts";

export default function Corpo() {
  return (
    <main class="corpo">
      <Timeline />
      <Sidebar />
    </main>
  );
}

const Timeline = () => {
  return (
    <div class="esquerda">
        <Stories />
        <Posts />
    </div>
  );
}

const Sidebar = () => {
  return (
    <div class="sidebar">
      <User
        img="../assets/img/catanacomics.svg"
        arroba="catanacomics"
        user="Catana"
      />
      <Suggestions />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

const User = (props) => {
  return (
    <div class="usuario">
      <img src={props.img} alt="" />
      <div class="texto">
        <strong>{props.arroba}</strong>
        {props.user}
      </div>
    </div>
  );
}

const Suggestions = () => {
  const suggestions = [
    {img: "../assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes.svg", reason: "Segue você"},
    {img: "../assets/img/chibirdart.svg", name: "chibirdart", reason: "Segue você"},
    {img: "../assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar", reason: "Novo no Instagram"},
    {img: "../assets/img/adorable_animals.svg", name: "adorable_animals", reason: "Segue você"},
    {img: "../assets/img/smallcutecats.svg", name: "smallcutecats", reason: "Segue você"}
  ];
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {suggestions.map(suggestion => <Suggestion img = {suggestion.img} name = {suggestion.name} reason = {suggestion.reason} />)}
    </div>
  );
}

const Suggestion = (props) => {
  return (
    <div class="sugestao">
        <div class="usuario">
          <img src={props.img} alt="" />
          <div class="texto">
            <div class="nome">{props.name}</div>
            <div class="razao">{props.reason}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
  )
}