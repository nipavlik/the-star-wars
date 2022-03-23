import styled from 'styled-components'
import Container from './Container'

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Title>The Star Wars</Title>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  border-bottom: 1px solid #dbdbdb;
  padding: 30px 0px;
`

const Title = styled.h1`
  text-align: center;
`

export default Header