import styled from 'styled-components'

import GlobalStyle from './globalStyles'
import Header from './components/Header'
import Container from './components/Container'
import Starwars from './components/Starwars'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Container>
          <Starwars />
        </Container>
      </Main>
    </>
  )
}

const Main = styled.main`
  margin-top: 20px;
`

export default App
