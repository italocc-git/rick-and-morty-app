import {
    StarFilled
    
  } from '@ant-design/icons';
import { useSelector } from 'react-redux';
type HeaderProps = {
    title: string;
}

export const Header = ({title} : HeaderProps) => {
    const {character} = useSelector(state => state) as any

    return(
        <div style={{padding:'0px 25px', display:'flex', alignItems:'center' , justifyContent: 'space-between'}}>
            <h1>{title}</h1>
            <div style={{display:'flex', gap:'1rem'}}>
                <span>Favoritos : {character.charactersItems.length}</span>
                <StarFilled/>
            </div>
        </div>
    )
}