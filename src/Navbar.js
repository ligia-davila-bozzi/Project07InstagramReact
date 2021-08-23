export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="container">
        <Logo />
        <LogoMobile />
        <InstaMobile />
        <Search />
        <Icon />
        <IconMobile />        
      </div>
    </nav>
  );
}

const Logo = () => {
  return (
    <div class="logo">
      <ion-icon name="logo-instagram" role="img" class="md hydrated" aria-label="logo instagram" ></ion-icon>
      <div class="separador"></div>
      <img src="../assets/img/logo.png" alt="" />
    </div>
  );
}

const LogoMobile = () => {
  return (
    <div class="logo-mobile">
      <ion-icon name="logo-instagram" role="img" class="md hydrated" aria-label="logo instagram"></ion-icon>
      </div>
  );
}

const InstaMobile = () => {
  return (
    <div class="instagram-mobile">
      <img src="../assets/img/logo.png" alt="" />
    </div>
  );
}

const Search = () => {
  return (
    <div class="pesquisa">
      <input type="text" placeholder="Pesquisar"></input>
    </div>
  );
}

const Icon = () => {
  return (
    <div class="icones">
      <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="paper plane outline"></ion-icon>
      <ion-icon name="compass-outline" role="img" class="md hydrated" aria-label="compass outline"></ion-icon>
      <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="heart outline"></ion-icon>
      <ion-icon name="person-outline" role="img" class="md hydrated" aria-label="person outline"></ion-icon>
    </div>
  );
}

const IconMobile = () => {
  return (
    <div class="icones-mobile">
      <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="paper plane outline"></ion-icon>
    </div>
  );
}