import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '../Button';

const AddTransactionDialog = ({ isOpen, handleClose, handleAdd }) => {
const tradingPartyValue = 'me';
const [counterPartyValue, setCounterPartyValue] = useState('');
const [amount, setAmount] = useState('');
const isAddEnabled = tradingPartyValue?.length > 0 
  && counterPartyValue?.length > 0 
  && (Number.isInteger(amount) && amount > 0);

  const onAddHandler = () => {
    handleAdd(
      tradingPartyValue,
      counterPartyValue,
      amount
    );
    handleClose();
  }

  return (
    <div>
      <Dialog open={ isOpen } onClose={ handleClose }>
        <DialogTitle id="form-dialog-title">Add Transaction</DialogTitle>
        <DialogContent>
        <TextField
            value={tradingPartyValue}
            margin="dense"
            label="Trading Party"
            type="text"
            fullWidth
          />
          <TextField
            value={counterPartyValue}
            onChange={(e) => setCounterPartyValue(e.target.value)}
            margin="dense"
            label="Counter Party"
            type="text"
            fullWidth
          />
          <TextField
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            margin="dense"
            label="Amount"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button label='Cancel' onClickHandler={ handleClose } />
          <Button isDisabled={ !isAddEnabled } label='Add' onClickHandler={ onAddHandler } />
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AddTransactionDialog;
