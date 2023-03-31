import styled, {css} from 'styled-components'

type SpecificationsProps = {
    status : 'Alive' | 'Dead' | 'unknown';
}

export const CharacterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: stretch;
    gap: 4rem;
    
    max-width: 1180;
    margin: 0 3rem;

`

export const ImageContainer = styled.div`
    width: 100%;
    max-width: 576px;
    height: 656px;
    
    background:  linear-gradient(180deg , #1ea000 0% , #1ea999 );
    border-radius: 8px;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img: {
        objectFit: cover;
    } 
   
`

export const CharacterDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const CharacterDetailsHeader = styled.div`
    display: flex;
    align-items: center;
    gap:1.5rem;

    h1{
        margin:0;
        font-size: 3rem;
    }
    
    svg {
        cursor: pointer;
    }

`

export const CharacterDetailsSpecifications = styled.div<SpecificationsProps>`

    display: flex;
    gap: 2.5rem;

    span {
        font-size: 1.3rem;
        font-weight: 500;
        &:last-child {
        ${(props) => {
            switch (props.status){
                case 'Alive': 
                    return css`
                        color: lime;
                    `
                case 'Dead': 
                    return css`
                    color: black;
                    `
                case 'unknown': 
                    return css`
                    color: green;
                `
            }
        }}
    }
    }
    
`