import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import styles from './TransactionsTable.styles';

const useStyles = makeStyles({
  table: {
    maxWidth: 400,
  },
});

const TransactionsTable = ({data}) => {
  const classes = useStyles();
  const isDataEmpty = !data?.length; 
  
  return isDataEmpty 
    ? <styles.container>
      No Transactions
    </styles.container> 
    : (
    <styles.container>
      <TableContainer component={styles.StyledPaper}>
        <Table stickyHeader className={classes.table} size="small">
          <styles.StyledTableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </styles.StyledTableHead>
          <TableBody>
            {data?.map?.((row, index) => (
              <TableRow key={row.id}>
                <TableCell >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </styles.container>
  );
}

export default TransactionsTable;