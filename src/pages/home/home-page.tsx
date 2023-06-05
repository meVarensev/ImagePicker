import React from 'react';
import {Container} from "../../components/ui/container/container";
import {Header} from "../../components/header/header";
import {Main} from "../../components/ui/main/main";
import {Logo} from "../../components/ui/logo-section/logo";
import {SectionCarusel} from "../../components/carusel/section-carusel";
import {TabsSection} from "../../components/tabs/tabs-section";

const HomePage = () => {
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
};

export {HomePage};
