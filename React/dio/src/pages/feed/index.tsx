import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Stephen Roque" image="https://avatars.githubusercontent.com/u/112592743?v=4" percentual={97}/>
                <UserInfo nome="Stephen Roque" image="https://avatars.githubusercontent.com/u/112592743?v=4" percentual={82}/>
                <UserInfo nome="Stephen Roque" image="https://avatars.githubusercontent.com/u/112592743?v=4" percentual={76}/>
                <UserInfo nome="Stephen Roque" image="https://avatars.githubusercontent.com/u/112592743?v=4" percentual={68}/>
                <UserInfo nome="Stephen Roque" image="https://avatars.githubusercontent.com/u/112592743?v=4" percentual={63}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
