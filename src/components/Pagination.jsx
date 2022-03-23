import styled from 'styled-components'

function Pagination({ onBack, onNext }) {
  return (
    <PaginationWrapper>
      <Button onClick={ () => onBack() }>Back</Button>
      <Button onClick={ () => onNext() }>Next</Button>
    </PaginationWrapper>
  )
}

const PaginationWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 15px;
  border: 1px solid #d0d0d0;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    border: 1px solid #8b8b8b;
  }
`

export default Pagination
