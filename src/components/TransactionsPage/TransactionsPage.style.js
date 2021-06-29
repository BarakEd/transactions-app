import styled from 'styled-components';

const container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
height: 90%;
border: 1px solid black;
border-radius: 15px;
width: 90%;
display: flex;
flex-direction: column;
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


const Footer = styled.div`
display: flex;
height: 20%;
width: 100%;
justify-content: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  > button {
    margin: 0 20px;
  }
`;

const TablesWrapper = styled.div`
  display: flex;
  height: 80%;
`;

const styles = {
  container,
  TableWrapper,
  TablesWrapper,
  Title,
  Footer,
  ButtonsWrapper,
  Wrapper,
};

export default styles;