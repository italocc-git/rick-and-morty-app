import { Header } from '@/components/Header'
import { Card, Col, Row } from 'antd'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { ArrowLeft } from 'phosphor-react'
import { LinkContainer } from './styles'
import { ICharacterState } from '@/types'
export default function FavoritesList() {
  const { characters } = useSelector((state) => state) as ICharacterState
  const { Meta } = Card
  return (
    <>
      <Header title="Favorite Characters" />
      <Head>
        <title>Favorite Characters | R & M </title>
      </Head>

      <div style={{ width: '100%', padding: '1rem' }}>
        <Row style={{ position: 'relative' }}>
          <Col>
            <LinkContainer href="/">
              <ArrowLeft size={32} />
              <span>Back</span>
            </LinkContainer>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          {characters.charactersItems.length > 0 ? (
            characters.charactersItems.map((character) => (
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
            ))
          ) : (
            <Col
              span={24}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <h1>No favorites found</h1>
            </Col>
          )}
        </Row>
      </div>
    </>
  )
}
