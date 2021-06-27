import styled from 'styled-components';
import Button from '@material-ui/core/Button';

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
height: 60%;
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

const StyledButton = styled(Button)` 
  width: fit-content;
  .MuiButton-label {
    text-transform: none;
  }
  `;
const styles = {
  container,
  TableWrapper,
  TablesWrapper,
  Title,
  StyledButton,
};

export default styles;