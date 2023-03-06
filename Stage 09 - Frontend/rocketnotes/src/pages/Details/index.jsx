import {Container, Links} from "./style.js";
import {Header} from "../../components/Header/index.jsx";
import {Button} from "../../components/Button/index.jsx";
import {Section} from "../../components/Section";
import {Tag} from "../../components/Tag/index.jsx";

export function App() {

    return (
        <Container>
            <Header />

            <Section title="Links uteis">
                <Links>
                    <li>
                        <a href="https://www.google.com.br/" target="_blank" rel="noreferrer">Google</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube</a>
                    </li>
                </Links>
            </Section>
            <Section title="Marcadores">
                <Tag title="React" />
                <Tag title="nodejs" />
            </Section>

            <Button title="Voltar" />
        </Container>
    )
}