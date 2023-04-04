import { Header } from '@/components/Header'
import { Card, Col, Row } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { ArrowLeft } from 'phosphor-react'
import { LinkContainer } from './styles'
import { ICharacterState } from '@/types'
export default function FavoritesList() {
  const { Meta } = Card
  const { characters } = useSelector((state) => state) as ICharacterState

  if (characters.charactersItems.length === 0) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5rem',
          justifyContent: 'center',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={32} />
          <span>Back</span>
        </Link>

        <h1>No favorites found</h1>
      </div>
    )
  }
  return (
    <>
      <Header title="Favorite Characters | R & M" />

      <div style={{ width: '100%', padding: '1rem' }}>
        <Row>
          <Col>
            <LinkContainer href="/">
              <ArrowLeft size={32} />
              <span>Back</span>
            </LinkContainer>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          {characters.charactersItems?.map((character) => (
            <Col
              key={character.id}
              xxl={6}
              xl={6}
              lg={6}
              md={8}
              sm={12}
              xs={24}
            >
              <Link href={`character/${character.id}`}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <Image
                      alt={character.name}
                      src={character.image}
                      width={240}
                      height={240}
                    />
                  }
                >
                  <Meta
                    title={character.name}
                    description={character.species}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}
