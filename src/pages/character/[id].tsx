import {useRouter} from 'next/router'
import { useSelector } from 'react-redux'

export default function Character() {
    const {query} = useRouter()
    const {id} = query

    const person = useSelector(state => state) as any


    return (
        <h1>Personagem {id} </h1>
    )
}