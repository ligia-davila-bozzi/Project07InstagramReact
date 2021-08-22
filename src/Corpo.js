export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>

      <div class="sidebar">
        <Usuario />
        <Sugestoes />

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </div>
  );
}

const Stories = () => {
  return (
    <div class="stories">
      <div class="story">
        <div class="imagem">
          <img src="../assets/img/9gag.svg" alt="" />
        </div>
        <div class="usuario">9gag</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="../assets/img/meowed.svg" alt="" />
        </div>
        <div class="usuario">meowed</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="../assets/img/barked.svg" alt="" />
        </div>
        <div class="usuario">barked</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="../assets/img/nathanwpylestrangeplanet.svg" alt="" />
        </div>
        <div class="usuario">nathanwpylestrangeplanet</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="../assets/img/wawawicomics.svg" alt="" />
        </div>
        <div class="usuario">wawawicomics</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="../assets/img/respondeai.svg" alt="" />
        </div>
        <div class="usuario">respondeai</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="../assets/img/filomoderna.svg" alt="" />
        </div>
        <div class="usuario">filomoderna</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="../assets/img/memeriagourmet.svg" alt="" />
        </div>
        <div class="usuario">memeriagourmet</div>
      </div>

      <div class="setinha">
        <ion-icon
          name="chevron-forward-circle"
          role="img"
          class="md hydrated"
          aria-label="chevron forward circle"
        ></ion-icon>
      </div>
    </div>
  );
}

const Posts = () => {
  return (
    <div class="posts">
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src="../assets/img/meowed.svg" alt="" />
            meowed
          </div>
          <div class="acoes">
            <ion-icon
              name="ellipsis-horizontal"
              role="img"
              class="md hydrated"
              aria-label="ellipsis horizontal"
            ></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src="../assets/img/gato-telefone.svg" alt="" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon
                name="heart-outline"
                role="img"
                class="md hydrated"
                aria-label="heart outline"
              ></ion-icon>
              <ion-icon
                name="chatbubble-outline"
                role="img"
                class="md hydrated"
                aria-label="chatbubble outline"
              ></ion-icon>
              <ion-icon
                name="paper-plane-outline"
                role="img"
                class="md hydrated"
                aria-label="paper plane outline"
              ></ion-icon>
            </div>
            <div>
              <ion-icon
                name="bookmark-outline"
                role="img"
                class="md hydrated"
                aria-label="bookmark outline"
              ></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="../assets/img/respondeai.svg" alt="" />
            <div class="texto">
              Curtido por <strong>respondeai</strong> e{" "}
              <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src="../assets/img/barked.svg" alt="" />
            barked
          </div>
          <div class="acoes">
            <ion-icon
              name="ellipsis-horizontal"
              role="img"
              class="md hydrated"
              aria-label="ellipsis horizontal"
            ></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src="../assets/img/dog.svg" alt="" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon
                name="heart-outline"
                role="img"
                class="md hydrated"
                aria-label="heart outline"
              ></ion-icon>
              <ion-icon
                name="chatbubble-outline"
                role="img"
                class="md hydrated"
                aria-label="chatbubble outline"
              ></ion-icon>
              <ion-icon
                name="paper-plane-outline"
                role="img"
                class="md hydrated"
                aria-label="paper plane outline"
              ></ion-icon>
            </div>
            <div>
              <ion-icon
                name="bookmark-outline"
                role="img"
                class="md hydrated"
                aria-label="bookmark outline"
              ></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="../assets/img/adorable_animals.svg" alt="" />
            <div class="texto">
              Curtido por <strong>adorable_animals</strong> e{" "}
              <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Usuario = () => {
  return (
    <div class="usuario">
      <img src="../assets/img/catanacomics.svg" alt="" />
      <div class="texto">
        <strong>catanacomics</strong>
        Catana
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

      <div class="sugestao">
        <div class="usuario">
          <img src="../assets/img/bad.vibes.memes.svg" alt="" />
          <div class="texto">
            <div class="nome">bad.vibes.memes</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="../assets/img/chibirdart.svg" alt="" />
          <div class="texto">
            <div class="nome">chibirdart</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="../assets/img/razoesparaacreditar.svg" alt="" />
          <div class="texto">
            <div class="nome">razoesparaacreditar</div>
            <div class="razao">Novo no Instagram</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="../assets/img/adorable_animals.svg" alt="" />
          <div class="texto">
            <div class="nome">adorable_animals</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="../assets/img/smallcutecats.svg" alt="" />
          <div class="texto">
            <div class="nome">smallcutecats</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    </div>
  );
}