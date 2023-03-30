import api from '@/services/api'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import {Card , Descriptions} from 'antd'
import Image from 'next/image'
import Link from 'next/link'
type Character = {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    created: string;
}


export default function Character() {
    const {query} = useRouter()
    const {id} = query

    const [character, setCharacter] = useState<Character>( {} as Character)

    const { Meta } = Card;
     useEffect(() => {
        api.get(`character/${id}`).then(response => setCharacter(response.data))
    },[id]) 

    

    return (
        <div style={{display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center'}}>
            <Link href='/character-list'> Voltar </Link>
            <Card
                hoverable
                cover={<Image alt="avatar" src={character.image} width={200} height={200} />}
                style={{
                    width:'300px',
                    height:'300px',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems: 'center',
                    cursor: 'initial'
                }}
            >
                <Meta title={character.name} description={character.status} />
            </Card>
            <Descriptions title="Informações do Personagem Info" >
                <Descriptions.Item label="Nome do Personagem">{character.name}</Descriptions.Item>
                <Descriptions.Item label="Status">{character.status}</Descriptions.Item>
                <Descriptions.Item label="Espécie">{character.species}</Descriptions.Item>
                <Descriptions.Item label="Gênero">{character.gender}</Descriptions.Item>
                <Descriptions.Item label="Criado">
                {new Date(character.created).toLocaleDateString('pt-BR',{
                      day:'numeric', month: 'long', year: 'numeric', weekday: 'long'
                })}
                </Descriptions.Item>
            </Descriptions>
        </div>
    )
}