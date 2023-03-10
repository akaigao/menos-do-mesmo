import styled from 'styled-components'

export const SectionTwoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px 80px;

  position: relative;

  background-color: ${props => props.theme.pallete.background.main};

  @media (max-width: 576px) {
    padding: 40px 16px;
  }

  h2 {
    font-size: 3em;
    font-weight: 700;

    @media (max-width: 576px) {
      font-size: 1.7em;
    }
  }
`

export const SectionTwoCards = styled.div`
  margin-top: 48px;

  display: grid;
  align-items: flex-start;
  justify-items: center;
  grid-template-columns: repeat(3, minmax(330px, 1fr));
  gap: 65px;

  a {
    color: ${props => props.theme.pallete.primary.text};
    text-decoration: none;
  }

  @media (max-width: 1120px) {
    grid-template-columns: repeat(3, minmax(230px, 1fr));
  }

  @media (max-width: 834px) {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    justify-items: start;
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  }
`
