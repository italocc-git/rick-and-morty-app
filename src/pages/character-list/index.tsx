import {useDispatch , useSelector} from 'react-redux'
import { useCallback} from 'react'
import { addCharacterToFavorite, deleteCaracterFromList } from '@/store/modules/character/actions'
import { IFavoriteCharacterState } from '@/store/modules/character/type'
import { Table } from '@/components/Table'
export default function CharacterList(){

    
    const dispatch = useDispatch()

   
   
   
      const state = useSelector(state => state)

  console.log(state) 

    const handleAddCharacterToFavorite = useCallback((character : IFavoriteCharacterState) => {
       
        dispatch(addCharacterToFavorite(character))
    }, [dispatch])
    /* console.log(characters) */
    return(
        <div>
           
            <h1>List of Characters</h1>
            <Table endPointLink='character' />
        </div>
    )
}