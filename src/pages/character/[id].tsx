import api from '@/services/api'
import {useRouter} from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import {Card} from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import {GenderMale , GenderFemale, GenderNeuter,  Star} from 'phosphor-react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { CharacterContainer , ImageContainer, CharacterDetails, CharacterDetailsHeader, CharacterDetailsSpecifications } from './styles'
type Character = {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    isFavorite:boolean;
}


export default function Character() {
    const {query} = useRouter()
    const {id} = query

    const dispatch = useDispatch()

    const [character, setCharacter] = useState<Character>( {} as Character)

    const { Meta } = Card;
     useEffect(() => {
        api.get(`character/${id}`).then(response => setCharacter(response.data))
    },[id]) 

    const handleAddCharacterToFavorite = useCallback((character : any) => {

       /*  if(character.isFavorite){
          dispatch(deleteCaracterFromList(character))
        }
        else {
          dispatch(addCharacterToFavorite(character))
        }
  
        
        
        const alteredListOfCharacters = characters.map(item => item.id === character.id ? {...character, isFavorite: !character.isFavorite} : item)
        setCaracters(alteredListOfCharacters) */
    }, [])

    return (
        <>
        
        <Head><title>{character.name} | R & M</title></Head>
        <Header title={`Character ${character.name}`}/>
        
        <CharacterContainer>
            <ImageContainer>
            <Image src={character.image} width={520} height={480} alt={character.name} />
            </ImageContainer>
            <CharacterDetails>
                <CharacterDetailsHeader>
                    <h1>{character.name}</h1>
                    <Star size={28} weight='bold' />
                </CharacterDetailsHeader>
                <CharacterDetailsSpecifications status={'Alive'}>
                    <span>{character.gender === 'Male' ? <GenderMale/> : character.gender === 'Female' ? <GenderFemale/> : <GenderNeuter/>}</span> |
                    <span>{character.species}</span> |
                    <span>{character.status}</span>
                </CharacterDetailsSpecifications>
                
            </CharacterDetails>
        </CharacterContainer>
       
        </>
    )
}