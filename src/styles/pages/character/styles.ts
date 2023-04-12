import Image from 'next/image'
import styled, { css } from 'styled-components'
import Link from 'next/link'
type SpecificationsProps = {
  status?: 'Alive' | 'Dead' | 'unknown'
}

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 615px) {
    margin-left: 1rem;
  }
`

export const ImageContainer = styled(Image)`
  border-radius: 150px;
`

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  position: absolute;
  top: 0;
  left: 0;
  color: black;
`

export const CharacterDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`

export const CharacterDetailsHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 1.5rem;

  h1 {
    margin: 0;
    font-size: 3rem;
  }

  svg {
    cursor: pointer;
  }
`

export const CharacterDetailsContent = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
`

export const CharacterDetailsInformations = styled.div<SpecificationsProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  h1 {
    color: #373f41;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .information-style {
    margin: 1.5rem 0;
    border-bottom: 2px solid rgba(33, 33, 33, 0.08);
    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #737b7d;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    /* &:last-child {
        ${(props) => {
      switch (props.status) {
        case 'Alive':
          return css`
            color: lime;
          `
        case 'Dead':
          return css`
            color: black;
          `
        case 'unknown':
          return css`
            color: green;
          `
      }
    }}
    } */
  }
`
