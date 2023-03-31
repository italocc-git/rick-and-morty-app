import { Header } from "@/components/Header"
import { Card, Col, Row } from "antd"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

export default function FavoritesList() {
    const {characters} = useSelector(state => state) as any
    console.log(characters)
    const {Meta} = Card
    return(
        <>
            <Header title='Personagens Favoritos' />
            <Head>
                <title>Personagens Favoritos | R & M </title>
            </Head>
            <div style={{width:'100%', padding:'1rem'}}>
                <Row gutter={[16, 16]} justify='center' >
                {characters?.charactersItems.map((character : any) => (
                    <Col key={character.id} span={4}>
                        <Link href={`character/${character.id}`}>
                            <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<Image alt={character.name} src={character.image} width={240} height={240}/>}
                        >
                            <Meta title={character.name} description={character.species} />
                            </Card>
                        </Link>
                    </Col>
                ))}
                </Row>
            </div>
            
        </>
    )
}