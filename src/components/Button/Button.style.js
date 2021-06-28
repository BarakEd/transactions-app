import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button).attrs({
  color: "primary",
})` 
  width: fit-content;
  .MuiButton-label {
    text-transform: none;
  }
`;
const styles = {
  StyledButton,
};

export default styles;