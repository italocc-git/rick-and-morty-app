import styled from 'styled-components'

export const HeaderComponent = styled.div`
  padding: 0.2rem 1.5rem;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);

  .item-add-to-favorite {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 56px;
    height: 56px;
    border-radius: 6;
    transition: 0.3s;
    cursor: pointer;
    color: black;
    border: 0;

    position: relative;
    &:hover {
      color: #00ff00;
    }

    span {
      position: absolute;
      background: #00ff00;
      top: 1px;
      right: 0px;
      color: #fff;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1000px;
      font-size: 14px;
      font-weight: 700;
    }
  }
`
