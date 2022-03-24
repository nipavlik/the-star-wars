import styled from 'styled-components'

function Vehicle({ name, model, manufacturer, costInCredits, length, 
  maxAtmospheringSpeed, crew, cargoCapacity, consumables, 
  vehicleClass }) {

  return (
    <VehicleWrapper>
      <VehicleCard>
        <Title>{ name }</Title>
        <Info>
          <Item>
            <Name>Model:</Name>
            <Text>{ model }</Text>
          </Item>
          <Item>
            <Name>Manufacturer:</Name>
            <Text>{ manufacturer }</Text>
          </Item>
          <Item>
            <Name>Cost in credits:</Name>
            <Text>{ costInCredits }</Text>
          </Item>
          <Item>
            <Name>Length:</Name>
            <Text>{ length }</Text>
          </Item>
          <Item>
            <Name>Max atmosphering speed:</Name>
            <Text>{ maxAtmospheringSpeed }</Text>
          </Item>
          <Item>
            <Name>Crew:</Name>
            <Text>{ crew }</Text>
          </Item>
          <Item>
            <Name>Cargo capacity:</Name>
            <Text>{ cargoCapacity }</Text>
          </Item>
          <Item>
            <Name>Consumables:</Name>
            <Text>{ consumables }</Text>
          </Item>
          <Item>
            <Name>Vehicle class:</Name>
            <Text>{ vehicleClass }</Text>
          </Item>
        </Info>
      </VehicleCard>
    </VehicleWrapper>
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

const VehicleCard = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  width: 250px;
`

const VehicleWrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
`

export default Vehicle