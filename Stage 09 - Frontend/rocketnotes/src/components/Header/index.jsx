import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles.js";

export function Header() {
  const macaco = "macaco";
  console.log(macaco);

  return (
    <Container>
      <Profile>
        <img src="https://github.com/luizf-lf.png" alt="Luiz Fernando" />

        <div>
          <span>Bem-Vindo</span>
          <strong>Luiz Fernando</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
