import api from '@/services/api';
import {useDispatch } from 'react-redux'
import { IFavoriteCharacterState } from '@/store/modules/characters/type'
import { useCallback} from 'react'
import { addCharacterToFavorite, deleteCaracterFromList } from '@/store/modules/characters/actions'
import {
    LeftSquareOutlined,
    RightSquareOutlined,
   
    
  } from '@ant-design/icons';
  import {Star} from 'phosphor-react'
import {  TablePaginationConfig } from 'antd';
import {useState , useEffect} from 'react'

import {
   StyledTable,
   StyledTag
  } from './styles';
import Image from 'next/image';
import Link from 'next/link'
import { GetRowKey } from 'antd/es/table/interface';

type TableProps = {
    endPointLink: string
}
type CharactersInfoProps = {
    count: number;
    pages: number;
}

  export const Table = ({endPointLink} : TableProps) => {

    const dispatch = useDispatch()

    

    const [characters, setCaracters] = useState<IFavoriteCharacterState[]>([])
    const [charactersInfo, setCaractersInfo] = useState<CharactersInfoProps>({} as CharactersInfoProps)
    const [page, setPage] = useState(1)
    useEffect(() => {
        
        api.get(`${endPointLink}/?page=${page}`).then(response => {
            setCaracters(response.data.results)
            setCaractersInfo(response.data.info)
        })
    }, [endPointLink, page])
    
    const handleAddCharacterToFavorite = useCallback((character : IFavoriteCharacterState) => {

      if(character.isFavorite){
        dispatch(deleteCaracterFromList(character))
      }
      else {
        dispatch(addCharacterToFavorite(character))
      }

      
      
      const alteredListOfCharacters = characters.map(item => item.id === character.id ? {...character, isFavorite: !character.isFavorite} : item)
      setCaracters(alteredListOfCharacters)
  }, [dispatch, characters])

    const columns = [
          {
            title: 'Avatar',
            dataIndex: 'image',
            align: 'center' as const,
            
            render: (imageUrl: string  , record : any) => 
              <Image src={imageUrl} width={48} height={48} alt={record.name} />
          },
          {
            title: 'Nome',
            dataIndex: 'name',
            align: 'center' as const,
            render: (name : string, character : any) => {
              return <Link href={`/character/${character.id}`} >{name}</Link>
            }
              
            
          },
          {
            title: 'Status',
            dataIndex: 'status',
            align: 'center' as const,
            render : (status : string) => 
                status === 'Alive' ? (
                    <StyledTag color="#02b948">
                    Alive
                </StyledTag>
                ) : status === 'Dead' ?(
                <StyledTag color="#1b1b1b">
                    Dead
                </StyledTag>
                ) : 
                (
                  <StyledTag color="#a89c96">
                    Unknown
                  </StyledTag>
                ),
                
          },
          {
            title: 'Espécie',
            dataIndex: 'species',
            align: 'center' as const,
          },
          {
            title: 'Gênero',
            dataIndex: 'gender',
            align: 'center' as const,
            render: (gender: string) =>
                gender === 'Male' ? (
                <StyledTag color="#3700ff">
                    Male
                </StyledTag>
                ) : (
                <StyledTag color='#e0299a' >
                    Female
                </StyledTag>
                ),
          },
          {
            title: 'Favorito?',
            align: 'center' as const,
            width: '10%',
            render: (data: any) => {
                
              return (
                <button style={{background: 'transparent', border:0, cursor: 'pointer'}} onClick={() => handleAddCharacterToFavorite(data)}>
                    {data.isFavorite ? <Star weight="bold" color='#ffe234' /> : <Star />}</button>
              );
            },
        }
    ]
    const styleConfig: React.CSSProperties = {
        color: 'dodgerblue',
        fontSize: '1.2rem',
      };
    const paginationConfig: any = {
        prevIcon: <LeftSquareOutlined style={styleConfig} />,
        nextIcon: <RightSquareOutlined style={styleConfig} />,
        position: ['bottomCenter'],
        responsive: true,
        pageSize:20,
        total:20*42,
        showSizeChanger: false,
        showTotal: (total : any, range : any) => {
          return `Exibindo ${range[0]}-${range[1]} de ${total} registros`;
        },
      };

    const handlePaginationChange  = (page: TablePaginationConfig) => {
        if(page.current){
            setPage(page.current)
        }
    }

    return(
        <StyledTable dataSource={characters}
        onChange= {handlePaginationChange}
        pagination={paginationConfig} columns={columns} 
        tableLayout="auto" 
        rowKey={(data : any) => data.id}
        locale={{ emptyText: 'Nenhum personagem encontrado' }} />
    )
  }