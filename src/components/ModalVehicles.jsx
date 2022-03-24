import styled from 'styled-components'

import Spinner from '../components/Spinner'

import useModalVehicles from '../hooks/useModalVehicles'
import Vehicle from './Vehicle'

function Modal({ title }) {

  const { data, visible, close, loading } = useModalVehicles()

  return (
    <ModalWrapper style={{ display: visible ? 'flex' : 'none' }} onClick={ () => close() }>
      <ModalBlock>
        <Title>{ title }</Title>
        <Info>
          { loading && <Spinner /> }

          { data.length == 0 && 'No vehicles' }

          { data.map((vehicle, index) => {
            console.log(vehicle)
            return (
              <Vehicle 
                name={vehicle.name} 
                model={vehicle.model}
                manufacturer={vehicle.manufacturer}
                costInCredits={vehicle.cost_in_credits}
                length={vehicle.length}
                maxAtmospheringSpeed={vehicle.max_atmosphering_speed}
                crew={vehicle.crew}
                passengers={vehicle.passengers}
                cargoCapacity={vehicle.cargo_capacity}
                consumables={vehicle.consumables}
                vehicleClass={vehicle.vehicle_class}
                key={index} />
            )
          }) }
        </Info>
      </ModalBlock>
    </ModalWrapper>
  )
}

const Info = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
`

const Title = styled.h4`
  margin: 20px 20px 0px 20px;
`

const ModalBlock = styled.div`
  min-height: fit-content;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  border-radius: 5px;
  @media (max-width: 400px) { 
    width: 100%;
    border-radius: 0px;
  }
`

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000040;
`

export default Modal