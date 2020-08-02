import styled from 'styled-components';

const CategoryTable = styled.table`
  border-bottom: 1px solid var(--grayLight);
  border-collapse: collapse;
  font-size: 14px;
  text-align: left;

  th, td {
    border-bottom: 1px solid var(--grayLight);
  }

  td, th {
    padding: 5px;
  }

  th {
    font-size: 15px;
  }

  tr:not(:first-child):hover {
    background-color: #00000005;
  }

  .colorBlock {
    border-radius: 4px;
    width: 40px;
    height: 25px;
  }
`;

export default CategoryTable;
