import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  margin-bottom: 1rem;
  color: black;
  cursor: pointer;
`

export const ButtonCleanFavorites = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  color: black;
  transition: 0.3s;
  &:hover {
    color: #1677ff;
  }
`
