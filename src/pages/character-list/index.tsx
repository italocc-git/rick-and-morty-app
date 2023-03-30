

import { Form } from '@/components/Form'
import { Header } from '@/components/Header'
import { Table } from '@/components/Table'
export default function CharacterList(){

    return(
        <div>
            <Header title='Lista de Personagens'/>
            <Form/>


            <Table endPointLink='character' />
        </div>
    )
}