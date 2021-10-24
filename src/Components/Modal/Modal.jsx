import React from 'react';
import { Button } from '../../GlobalStyles/GlobalStyles';
import Input from '../Forms/Input';
import { Title } from '../Users/style';
import { ModalBg, ModalContent, CLose } from './ModalStyle';

function Modal({ dataModal, users }) {
  const [value, setValue] = React.useState('');
  if (dataModal) {
    const Date = users.filter((item) => {
      return item.id === dataModal.id;
    });
    const Filtered = Object.values(Date[0]).filter(
      (item) => typeof item === 'string'
    );
    console.log(Filtered);

    return (
      <ModalBg>
        <ModalContent>
          <CLose>x</CLose>
          <Title>Editing User</Title>
          {Filtered.map((item, id) => {
            return (
              <Input
                type='text'
                name={'name' + id}
                label='Name'
                value={value}
                onChange={({ target }) => setValue(target.value)}
              />
            );
          })}
          <Button>Save</Button>
        </ModalContent>
      </ModalBg>
    );
  }
  return null;
}

export default Modal;
