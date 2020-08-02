import styled from 'styled-components';

const CategoryTable = styled.table`
  border: 1px solid var(--tertiary);
  border-collapse: collapse;
  font-size: 15px;

  th, td {
    border: 1px solid var(--grayLight);
  }

  td {
    padding: 5px;
  }

  .colorBlock {
    border-radius: 4px;
    width: 30px;
    height: 25px;
  }
`;

export default CategoryTable;
