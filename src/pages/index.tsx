

import { Form } from '@/components/Form'
import { Header } from '@/components/Header'

import { Table } from '@/components/Table'
import Head from 'next/head'
export default function CharacterList(){

    return(
        <>
            <Head>
                <title>List of Characters | R & M</title>
            </Head>
            <Header title='Favorite Characters' />
            
            
            <Form/>


            <Table endPointLink='character' />
        </>
    )
}