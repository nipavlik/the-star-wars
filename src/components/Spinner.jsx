import ClipLoader from 'react-spinners/ClipLoader'
import styled from 'styled-components'

function Spinner() {
  return (
    <SpinnerWrapper>
      <ClipLoader color='#000' size={ 50 } />
    </SpinnerWrapper>
    
  )
}

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default Spinner