import { Table as TableAntd , Tag} from 'antd';
import styled, {css} from 'styled-components';


export const StyledTable = styled(TableAntd)`
  &&& {
    .ant-table-column-sort {
      background: transparent;
    }
    /* Responsive */
    @media (max-width: 768px) {
      .ant-table-thead > tr > th,
      .ant-table-tbody > tr > td {
        padding: 12px 8px;
      
    }
  }
}`;

export const StyledTag = styled(Tag)<any>`

   

 /*  ${props =>
    props.type === 'success'
      ? css`
          color: '#52c41a' ;
          background: '#f6ffed';
          border-color: '#b7eb8f';
        `
      : css`
          color: '#ff4d4f' ;
          background: '#fff2f0' ;
          border-color: '#ffccc7';
        `} */
`;