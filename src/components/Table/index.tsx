import api from '@/services/api';
import { IFavoriteCharacterState } from '@/store/modules/character/type';
import {
    LeftSquareOutlined,
    RightSquareOutlined
  } from '@ant-design/icons';
import {  TablePaginationConfig } from 'antd';
import {useState , useEffect} from 'react'

import {
   StyledTable,
   StyledTag
  } from './styles';

type TableProps = {
    endPointLink: string
}
type CharactersInfoProps = {
    count: number;
    pages: number;
}

  export const Table = ({endPointLink} : TableProps) => {

    const [characters, setCaracters] = useState<IFavoriteCharacterState[]>([])
    const [charactersInfo, setCaractersInfo] = useState<CharactersInfoProps>({} as CharactersInfoProps)
    const [page, setPage] = useState(1)
    useEffect(() => {
        
        api.get(`${endPointLink}/?page=${page}`).then(response => {
            setCaracters(response.data.results)
            setCaractersInfo(response.data.info)
        })
    }, [endPointLink, page])
    
    const columns = [
          {
            title: 'ID',
            dataIndex: 'id',
            align: 'center' as const,
          },
          {
            title: 'Nome',
            dataIndex: 'name',
            align: 'center' as const,
          },
          {
            title: 'Status',
            dataIndex: 'status',
            align: 'center' as const,
            render : (status : string) => 
                status === 'Alive' ? (
                    <StyledTag color="success">
                    Vivo
                </StyledTag>
                ) : (
                <StyledTag color="error">
                    Morto/Desconhecido
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
                <StyledTag color="#29e973">
                    Másculino
                </StyledTag>
                ) : (
                <StyledTag color='#e20f91' >
                    Feminino
                </StyledTag>
                ),
          },
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
        console.log(page)
    }

    return(
        <StyledTable dataSource={characters}
        onChange= {handlePaginationChange}
        pagination={paginationConfig} columns={columns} 
        tableLayout="auto" 
        locale={{ emptyText: 'Nenhum personagem encontrado' }} />
    )
  }