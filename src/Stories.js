export default function Stories() {
  const stories = [
    {
      img: "./assets/img/9gag.svg",
      user: "9gag"
    },
    {
      img: "./assets/img/meowed.svg",
      user: "meowed"
    },
    {
      img: "./assets/img/barked.svg",
      user: "barked"
    },
    {
      img: "./assets/img/nathanwpylestrangeplanet.svg",
      user: "nathanwpylestrangeplanet"
    },
    {
      img: "../assets/img/wawawicomics.svg",
      user: "wawawicomics"
    },
    {
      img: "../assets/img/respondeai.svg",
      user: "respondeai"
    },
    {
      img: "../assets/img/filomoderna.svg",
      user: "filomoderna"
    },
    {
      img: "../assets/img/memeriagourmet.svg",
      user: "memeriagourmet"
    }
  ];

  return (
    <div class="stories">
      {stories.map( story => <Story img= {story.img} user={story.user} />)}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle" role="img" class="md hydrated" aria-label="chevron forward circle"></ion-icon>
      </div>
    </div>
  );
}

const Story = (props) => {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} alt="" />
      </div>
      <div class="usuario">{props.user}</div>
    </div>
  );
};
