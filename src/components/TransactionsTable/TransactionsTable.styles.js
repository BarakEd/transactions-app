import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';

const container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  justify-content: center;
  max-height: 500px;
`;

export const StyledPaper = styled(Paper)`
  max-width: 400px;
`;

export const StyledTableHead = styled(TableHead)`
  .MuiTableCell-root.MuiTableCell-head.MuiTableCell-sizeSmall.MuiTableCell-stickyHeader{
    font-size: 17px;
    font-weight: 600;
  }
`;
const styles = {
  StyledPaper,
  container,
  StyledTableHead,
};

export default styles;