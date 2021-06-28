import React from 'react';
import styles from './Button.style';


const Button = ({ label, onClickHandler, isDisabled }) => (
  <styles.StyledButton disabled={ isDisabled } onClick={ onClickHandler } >{ label }</styles.StyledButton>
);

export default Button;