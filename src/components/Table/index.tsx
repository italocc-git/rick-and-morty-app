import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback } from 'react'
import {
  addCharacterToFavorite,
  deleteCaracterFromList,
} from '@/store/modules/characters/actions'
import { LeftSquareOutlined, RightSquareOutlined } from '@ant-design/icons'
import { Star } from 'phosphor-react'
import { Spin, TablePaginationConfig } from 'antd'

import { StyledTable, StyledTag } from './styles'
import Image from 'next/image'
import Link from 'next/link'
import {
  TablePagination,
  ICharacterState,
  ICharacterStateItem,
  PaginationInfoProps,
} from '@/types'

type TableProps = {
  endPointLink?: string
  loading: boolean
  page: TablePagination
  setPage: (page: TablePagination) => void
  paginationInfo: PaginationInfoProps
  characters: ICharacterStateItem[]
  setCharacters: (character: ICharacterStateItem[]) => void
}

export const Table = ({
  characters,
  page,
  setPage,
  setCharacters,
  paginationInfo,
  loading,
}: TableProps) => {
  const dispatch = useDispatch()

  const globalState = useSelector((state) => state) as ICharacterState

  const handleAddCharacterToFavorite = useCallback(
    (character: ICharacterStateItem) => {
      const isAlreadyInFavoriteList =
        globalState.characters.charactersItems.find(
          (characterState: ICharacterStateItem) =>
            characterState.id === character.id,
        )

      if (!character.isFavorite && isAlreadyInFavoriteList) {
        alert(`${character.name} is already in Favorite List, try another one`)
        return
      }

      if (character.isFavorite) {
        dispatch(deleteCaracterFromList(character))
      } else {
        dispatch(addCharacterToFavorite(character))
      }

      const alteredListOfCharacters = characters.map((item) =>
        item.id === character.id
          ? { ...character, isFavorite: !character.isFavorite }
          : item,
      )
      setCharacters(alteredListOfCharacters)
    },
    [dispatch, characters, setCharacters, globalState],
  )

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'image',
      align: 'center' as const,

      render: (imageUrl: string, record: any) => (
        <Image
          style={{ borderRadius: 999 }}
          src={imageUrl}
          width={48}
          height={48}
          alt={record.name}
        />
      ),
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      responsive: ['sm'] as any,
      align: 'center' as const,
      render: (name: string, character: any) => {
        return <Link href={`/character/${character.id}`}>{name}</Link>
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center' as const,
      render: (status: string) =>
        status === 'Alive' ? (
          <StyledTag color="#02b948">Alive</StyledTag>
        ) : status === 'Dead' ? (
          <StyledTag color="#1b1b1b">Dead</StyledTag>
        ) : (
          <StyledTag color="#a89c96">Unknown</StyledTag>
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
          <StyledTag color="#3700ff">Male</StyledTag>
        ) : gender === 'Female' ? (
          <StyledTag color="#e0299a">Female</StyledTag>
        ) : (
          <StyledTag color="#a3b924">Unknown</StyledTag>
        ),
    },
    {
      title: 'Favorito?',
      align: 'center' as const,
      width: '10%',
      render: (data: any) => {
        return (
          <button
            style={{ background: 'transparent', border: 0, cursor: 'pointer' }}
            onClick={() => handleAddCharacterToFavorite(data)}
          >
            {data.isFavorite ? (
              <Star weight="bold" color="#ffe234" />
            ) : (
              <Star />
            )}
          </button>
        )
      },
    },
  ]
  const styleConfig: React.CSSProperties = {
    color: 'dodgerblue',
    fontSize: '1.2rem',
  }
  const paginationConfig: any = {
    prevIcon: <LeftSquareOutlined style={styleConfig} />,
    nextIcon: <RightSquareOutlined style={styleConfig} />,
    position: ['bottomCenter'],
    responsive: true,
    current: page.current,
    pageSize: page.pageSize,
    total: page.pageSize * paginationInfo.pages,
    showSizeChanger: false,
    showTotal: (total: any, range: any) => {
      return `Displaying ${range[0]}-${range[1]} of ${total} records`
    },
  }

  const handlePaginationChange = (page: TablePaginationConfig) => {
    const { current, pageSize, total } = page
    if (current) {
      console.log(page)
      setPage({
        pageSize: pageSize ?? 20,
        total: total ?? 1,
        current,
      })
    }
  }

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Spin tip="Loading" size="large" />
      </div>
    )
  }

  return (
    <StyledTable
      dataSource={characters}
      onChange={handlePaginationChange}
      pagination={paginationConfig}
      columns={columns}
      tableLayout="auto"
      rowKey={(data: any) => data.id}
      locale={{ emptyText: 'No one character founded' }}
    />
  )
}
