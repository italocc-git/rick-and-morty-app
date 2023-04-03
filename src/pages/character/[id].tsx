import api from '@/services/api'
import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react'
import loadingImg from '@/assets/gif/loading.gif'
import {
  addCharacterToFavorite,
  deleteCaracterFromList,
} from '@/store/modules/characters/actions'
import {
  ArrowLeft,
  GenderMale,
  GenderFemale,
  GenderNeuter,
  Star,
} from 'phosphor-react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import {
  CharacterContainer,
  CharacterDetailsContent,
  ImageContainer,
  LinkContainer,
  CharacterDetails,
  CharacterDetailsHeader,
  CharacterDetailsInformations,
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getNotification } from '@/components/Notification'

type CharacterType = {
  id: number
  name: string
  status: string
  species: string
  gender: string
  image: string
  isFavorite: boolean
  type: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  episode: string[]
}

/* type Episode = {
  name: string
  air_date: string
  episode: string
} */

export default function Character() {
  const { query } = useRouter()
  const { id } = query
  const [character, setCharacter] = useState<CharacterType>({} as CharacterType)
  const [isFavorite, setIsFavorite] = useState(false)
  const { characters } = useSelector((state) => state) as any

  const dispatch = useDispatch()
  /* const [episodes, setEpisodes] = useState<Episode>({} as Episode) */

  const loadCharacterData = useCallback(() => {
    if (id) {
      api
        .get(`character/${id}`)
        .then((response) => {
          const characterData = response.data

          const characterFavorited = characters.charactersItems.some(
            (favoriteItem: any) => favoriteItem.id === characterData.id,
          )

          setCharacter(characterData)
          setIsFavorite(characterFavorited)
        })
        .catch(() =>
          getNotification(
            'Some problem with request of character data',
            'Failed',
          ),
        )
    }
  }, [id, setIsFavorite, setCharacter, characters.charactersItems])

  useEffect(() => {
    loadCharacterData()
  }, [loadCharacterData])

  const handleAddCharacterToFavorite = useCallback(
    (isFavorite: boolean) => {
      if (isFavorite) {
        dispatch(deleteCaracterFromList(character))
        getNotification('Character removed in your Favorite List', 'Success')
        setIsFavorite(false)
      } else {
        dispatch(addCharacterToFavorite(character))
        getNotification('Character added in your Favorite List', 'Success')
        setIsFavorite(true)
      }
    },
    [dispatch, character],
  )

  return (
    <>
      <Head>
        <title>{character.name} | R & M</title>
      </Head>
      <Header title={`Character ${character.name}`} />

      <CharacterContainer>
        <ImageContainer
          src={character.image ?? loadingImg}
          width={350}
          height={350}
          alt={character.name ?? ''}
          loading="eager"
        />
        <LinkContainer href="/">
          <ArrowLeft size={32} />
          <span>Back</span>
        </LinkContainer>
        <CharacterDetails>
          <CharacterDetailsHeader>
            <h1>{character.name}</h1>
            {isFavorite ? (
              <Star
                size={28}
                weight="fill"
                onClick={() => handleAddCharacterToFavorite(isFavorite)}
              />
            ) : (
              <Star
                size={28}
                weight="bold"
                onClick={() => handleAddCharacterToFavorite(isFavorite)}
              />
            )}
          </CharacterDetailsHeader>
          <CharacterDetailsContent>
            <CharacterDetailsInformations status={'Alive'}>
              <h1>Informations</h1>
              <div>
                <div className="information-style">
                  <h2>Gender</h2>
                  <span>
                    {character.gender === 'Male' ? (
                      <GenderMale />
                    ) : character.gender === 'Female' ? (
                      <GenderFemale />
                    ) : (
                      <GenderNeuter />
                    )}
                  </span>
                </div>
                <div className="information-style">
                  <h2>Status</h2>
                  <span>{character.status}</span>
                </div>
                <div className="information-style">
                  <h2>Specie</h2>
                  <span>{character.species}</span>
                </div>
                <div className="information-style">
                  <h2>Origin</h2>
                  <span>{character.origin?.name}</span>
                </div>
                <div className="information-style">
                  <h2>Type</h2>
                  <span>
                    {character.type === '' ? 'unknown' : character.type}
                  </span>
                </div>
                <div className="information-style">
                  <h2>Location</h2>
                  <span>{character.location?.name}</span>
                </div>
              </div>
            </CharacterDetailsInformations>
            <CharacterDetailsInformations>
              <h1>Episodes</h1>
              {/*  <div>
                                <div className='information-style'>
                                    <h2>Gender</h2>
                                    <span>{character.gender === 'Male' ? <GenderMale/> : character.gender === 'Female' ? <GenderFemale/> : <GenderNeuter/>}</span>    
                                </div>
                                <div  className='information-style'>
                                    <h2>Status</h2>
                                    <span>{character.status}</span>
                                </div>
                                <div  className='information-style'>
                                    <h2>Specie</h2>
                                    <span>{character.species}</span>
                                </div> 
                                <div  className='information-style'>
                                    <h2>Origin</h2>
                                    <span>{character.origin.name}</span>
                                </div>
                                <div  className='information-style'>
                                    <h2>Type</h2>
                                    <span>{character.type === '' ? 'unknown' : character.type}</span>
                                </div>
                                <div  className='information-style'>
                                    <h2>Location</h2>
                                    <span>{character.location.name}</span>
                                </div>  
                            </div> */}
            </CharacterDetailsInformations>
          </CharacterDetailsContent>
        </CharacterDetails>
      </CharacterContainer>
    </>
  )
}
