import React from 'react';
import { Button } from '../../GlobalStyles/GlobalStyles';
import Input from '../Forms/Input';
import { Title } from '../Users/style';
import { ModalBg, ModalContent, CLose } from './ModalStyle';
import { UserContext } from '../../Context/UserContext';

function Modal({ ref }) {
  const { openModal, setOpenModal } = React.useContext(UserContext);

  const [emailValue, setEmailValue] = React.useState('');
  const [nameValue, setNameValue] = React.useState('');
  const [UnitValue, setUnitValue] = React.useState('');

  return (
    <ModalBg ref={ref}>
      <ModalContent>
        <CLose onClick={() => setOpenModal(false)}>x</CLose>
        <Title>Editing User</Title>
        <Input
          type='text'
          name='name'
          label='Name'
          value={nameValue}
          onChange={({ target }) => setNameValue(target.value)}
        />
        <Input
          type='text'
          name='email'
          label='Email'
          value={emailValue}
          onChange={({ target }) => setEmailValue(target.value)}
        />
        <Input
          type='text'
          name='unit'
          label='Unit'
          value={UnitValue}
          onChange={({ target }) => setUnitValue(target.value)}
        />
        <Button>Save</Button>
      </ModalContent>
    </ModalBg>
  );
}

export default Modal;
