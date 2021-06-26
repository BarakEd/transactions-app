import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  justify-content: center;
`;

export const StyledPaper = styled(Paper)`
  max-width: 400px;
`;

const styles = {
  StyledPaper,
  container,
};

export default styles;