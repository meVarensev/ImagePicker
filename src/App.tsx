import {Header} from "./components/header/header";
import {Main} from "./components/ui/main/main";
import {Container} from "./components/ui/container/container";
import {SectionCarusel} from "./components/carusel/section-carusel";
import {Logo} from "./components/ui/logo-section/logo";
import {TabsSection} from "./components/tabs/tabs-section";

function App() {

    return (
        <Container>
            <Header/>
            <Main>
                <Logo/>
                <SectionCarusel/>
                <TabsSection/>
            </Main>

        </Container>
    );
}

export default App;
