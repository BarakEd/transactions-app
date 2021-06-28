import styled from 'styled-components';

const container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TablesWrapper = styled.div`
height: 90%;
border: 1px solid black;
border-radius: 15px;
width: 90%;
display: flex;
`;

const TableWrapper = styled.div`
height: 100%;
width: 50%;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`;

const Title = styled.h2` 
  text-decoration: underline;
`;

const styles = {
  container,
  TableWrapper,
  TablesWrapper,
  Title,
};

export default styles;