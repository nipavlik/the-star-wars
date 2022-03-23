import styled from 'styled-components'

function People({ name, gender, eyeColor, birthYear, hairColor, height, mass, skinColor }) {
  return (
    <PeopleWrapper>
      <PeopleCard>
        <Title>{ name }</Title>
        <Info>
          <Item>
            <Name>Gender:</Name>
            <Text>{ gender }</Text>
          </Item>
          <Item>
            <Name>Height:</Name>
            <Text>{ height }</Text>
          </Item>
          <Item>
            <Name>Birth year:</Name>
            <Text>{ birthYear }</Text>
          </Item>
          <Item>
            <Name>Eye color:</Name>
            <Text>{ eyeColor }</Text>
          </Item>
          <Item>
            <Name>Hair color:</Name>
            <Text>{ hairColor }</Text>
          </Item>
          <Item>
            <Name>Skin color:</Name>
            <Text>{ skinColor }</Text>
          </Item>
          <Item>
            <Name>Mass:</Name>
            <Text>{ mass }</Text>
          </Item>
        </Info>
      </PeopleCard>
    </PeopleWrapper>
  )
}

const Text = styled.div`
  
`

const Name = styled.div`
  
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`

const Info = styled.div`
  padding: 10px;
`

const Title = styled.h4`
  border-bottom: 1px solid #dbdbdb;
  text-align: center;
  padding: 10px;
  background-color: #e4e4e4;
`

const PeopleCard = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  cursor: pointer;
`

const PeopleWrapper = styled.div`
  width: 20%;
  box-sizing: border-box;
  padding: 10px;

  @media (max-width: 1140px) { 
    width: 25%;
  }
  @media (max-width: 950px) { 
    width: 33.3%;
  }
  @media (max-width: 700px) { 
    width: 50%;
  }
  @media (max-width: 460px) { 
    width: 100%;
  }
`

export default People