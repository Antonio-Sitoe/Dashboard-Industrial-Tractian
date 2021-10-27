import React from 'react';
import { Button } from '../../GlobalStyles/GlobalStyles';
import { Title } from '../Users/style';
import { ModalBg, ModalContent, CLose } from './ModalStyle';
import { UserContext } from '../../Context/UserContext';

function Modal({ handleChange, title, children, load }) {
  const { setOpenModal } = React.useContext(UserContext);

  return (
    <ModalBg onSubmit={handleChange}>
      <ModalContent>
        <CLose onClick={() => setOpenModal(false)}>x</CLose>
        <Title>{title}</Title>
        {children}
        <Button>{load ? 'loading...' : 'Save'}</Button>
      </ModalContent>
    </ModalBg>
  );
}

export default Modal;
