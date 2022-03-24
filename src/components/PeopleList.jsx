import styled from 'styled-components'

import People from './People'

function PeopleList({ data }) {

  return (
    <PeopleListWrapper>

      { data.map((p, index) => 
        <People 
          name={p.name}
          height={p.height}
          gender={p.gender}
          eyeColor={p.eye_color}
          birthYear={p.birth_year}
          hairColor={p.hair_color}
          mass={p.mass}
          skinColor={p.skin_color}
          vehicles={p.vehicles}
          key={index} />
      ) }

    </PeopleListWrapper>
  )
}

const PeopleListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default PeopleList