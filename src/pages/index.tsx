import { Form } from '@/components/Form'
import { Header } from '@/components/Header'

import { Table } from '@/components/Table'
import api from '@/services/api'
import { useEffect, useState } from 'react'
import {
  ICharacterStateItem,
  IFilterTypes,
  PaginationInfoProps,
  TablePagination,
} from '@/types'
import { getNotification } from '@/components/Notification'
import { Spin } from 'antd'
import { Container, LoadingContainer } from './styles'

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
      .catch((e) => getNotification('Character Not found', 'Failed'))
      .finally(() => setLoading(false))
  }, [filter, page])

  if (loading) {
    return (
      <LoadingContainer>
        <Spin size="large"></Spin>
      </LoadingContainer>
    )
  }

  return (
    <Container>
      <Header title="List of Characters | R & M" />

      <Form setFilter={setFilter} />

      <Table
        page={page}
        loading={loading}
        setPage={setPage}
        paginationInfo={paginationInfo}
        characters={characters}
        setCharacters={setCaracters}
      />
    </Container>
  )
}
