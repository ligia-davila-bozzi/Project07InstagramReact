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
      <Usuario
        img="../assets/img/catanacomics.svg"
        arroba="catanacomics"
        user="Catana"
      />
      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

const Usuario = (props) => {
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

const Sugestoes = () => {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      <Sugestao img = "../assets/img/bad.vibes.memes.svg" name = "bad.vibes.memes" reason = "Segue você" />
      <Sugestao img = "../assets/img/chibirdart.svg" name = "chibirdart" reason = "Segue você" />
      <Sugestao img = "../assets/img/razoesparaacreditar.svg" name = "razoesparaacreditar" reason = "Novo no Instagram" />
      <Sugestao img = "../assets/img/adorable_animals.svg" name = "adorable_animals" reason = "Segue você" />
      <Sugestao img = "../assets/img/smallcutecats.svg" name = "smallcutecats" reason = "Segue você" />
    </div>
  );
}

const Sugestao = (props) => {
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