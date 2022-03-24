import styled from 'styled-components'
import { RecoilRoot } from 'recoil'

import GlobalStyle from './globalStyles'
import Header from './components/Header'
import Container from './components/Container'
import Starwars from './components/Starwars'

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <Main>
        <Container>
          <Starwars />
        </Container>
      </Main>
    </RecoilRoot>
  )
}

const Main = styled.main`
  margin-top: 20px;
`

export default App
