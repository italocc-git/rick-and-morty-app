import styled from 'styled-components'

export const HeaderComponent = styled.div`
    padding : 0 2rem;
    width:100%;
    max-width: 1180;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item-add-to-favorite {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        width:56px;
        height: 56px;
        border-radius: 6;
        transition: 0.3;
        cursor: pointer;
        color:#00f100;
        border:0;
        
        position: relative;
        &:hover {
            color:#00ff00
        }

        span {
            position: absolute;
            background: blue;
            top: -7px;
            right: -7px;
            width:24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 1000px;
            font-size: 14px;
            font-weight: 700;
        }
    }
`
