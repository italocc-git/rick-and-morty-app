import {useRouter} from 'next/router'

export default function Character() {
    const {query} = useRouter()
    const {id} = query
    return (
        <h1>Personagem {id}</h1>
    )
}