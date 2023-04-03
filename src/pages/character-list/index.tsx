import { Form } from '@/components/Form'
import { Header } from '@/components/Header'

import { Table } from '@/components/Table'
import api from '@/services/api'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { CharacterListContainer } from './styles'
import {
  ICharacterStateItem,
  IFilterTypes,
  PaginationInfoProps,
  TablePagination,
} from '@/types'

export default function CharacterList() {
  const filterInitialValues = {
    name: '',
    gender: '',
    species: '',
    status: '',
  } as IFilterTypes

  const totalPerPage = 20
  const [filter, setFilter] = useState<IFilterTypes>(filterInitialValues)
  const [page, setPage] = useState<TablePagination>({
    current: 1,
    pageSize: totalPerPage,
    total: 1,
  })
  const [characters, setCaracters] = useState<ICharacterStateItem[]>([])
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfoProps>({
    pages: 42,
  })
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    api
      .get(
        `character/?page=${page.current}&name=${filter.name}&species=${filter.species}&status=${filter.status}&gender=${filter.gender}`,
      )
      .then(({ data }) => {
        setCaracters(data.results)
        setPaginationInfo(data.info)
      })
      .catch((e) => alert(e.response.data.error))
      .finally(() => setLoading(false))
  }, [filter, page])
  return (
    <CharacterListContainer>
      <Head>
        <title>List of Characters | R & M</title>
      </Head>
      <Header title="Favorite Characters" />

      <Form setFilter={setFilter} setPage={setPage} />

      <Table
        page={page}
        loading={loading}
        setPage={setPage}
        paginationInfo={paginationInfo}
        characters={characters}
        setCharacters={setCaracters}
      />
    </CharacterListContainer>
  )
}
