export default function Posts() {
  const posts = [
    {
      imgUser: "../assets/img/meowed.svg",
      user: "meowed",
      conteudo: "../assets/img/gato-telefone.svg",
      imgLike: "../assets/img/respondeai.svg",
      like: "respondeai",
      likes: "outras 101.523 pessoas"
    },
    {
      imgUser: "../assets/img/barked.svg",
      user: "barked",
      conteudo: "../assets/img/dog.svg",
      imgLike: "../assets/img/adorable_animals.svg",
      like: "adorable_animals",
      likes: "outras 99.159 pessoas"
    }
  ];
  return (
    <div class="posts">
      {posts.map( post => <Post imgUser = {post.imgUser} user = {post.user} conteudo = {post.conteudo} imgLike = {post.imgLike} like = {post.like} likes = {post.likes} />)}
    </div>
  );
}

const Post = (props) => {
  return (
    <div class = "post">
      <TopPost imgUser = {props.imgUser} user = {props.user} />
      <ConteudoPost conteudo = {props.conteudo} />
      <FundoPost
        imgLike = {props.imgLike}
        like = {props.like}
        likes = {props.likes}
      />
    </div>
  );
};

const TopPost = (props) => {
  return (
    <div class = "topo">
      <div class = "usuario">
        <img src = {props.imgUser} alt = "" />
        {props.user}
      </div>
      <div class = "acoes">
        <ion-icon name = "ellipsis-horizontal" role = "img" class = "md hydrated" aria-label = "ellipsis horizontal"></ion-icon>
      </div>
    </div>
  );
};

const ConteudoPost = (props) => {
  return (
    <div class = "conteudo">
      <img src = {props.conteudo} alt = "" />
    </div>
  );
};

const FundoPost = (props) => {
  return (
    <div class = "fundo">
      <div class = "acoes">
        <div>
          <ion-icon name = "heart-outline" role = "img" class = "md hydrated" aria-label = "heart outline"></ion-icon>
          <ion-icon name = "chatbubble-outline" role = "img" class = "md hydrated" aria-label = "chatbubble outline"></ion-icon>
          <ion-icon name = "paper-plane-outline" role = "img" class = "md hydrated" aria-label = "paper plane outline"></ion-icon>
        </div>
        <div>
          <ion-icon name = "bookmark-outline" role = "img" class = "md hydrated" aria-label = "bookmark outline"></ion-icon>
        </div>
      </div>

      <div class = "curtidas">
        <img src = {props.imgLike} alt = "" />
        <div class = "texto">
          Curtido por <strong>{props.like}</strong> e{" "}
          <strong>{props.likes}</strong>
        </div>
      </div>
    </div>
  );
};