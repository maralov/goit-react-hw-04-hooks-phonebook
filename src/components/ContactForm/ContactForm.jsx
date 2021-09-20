import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

import Input from '../Input/';
import { FormItem } from './ContactForm.styled';


export default function ContactForm({ onSubmit } ) {

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ currentTarget }) => {
    const value = currentTarget.value;
    const name = currentTarget.name;

    switch (name) {
      case 'number':
        setNumber(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        return
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    resetForm();
  };

  const resetForm = () => {
    setNumber('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <FormItem>
          <label>
            Name
            <Input
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              autoComplete="off"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
        </FormItem>
        <FormItem>
          <label>
            Phone Number
            <Input
              value={number}
              onChange={handleChange}
              type="text"
              name="number"
              autoComplete="off"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
        </FormItem>

        <Button htmlType="submit" type="primary" icon={<UserAddOutlined />}>
          Add contact
        </Button>
      </Card>
    </form>
  );
}
ContactForm.prototypes = {
    onSubmit: PropTypes.func,
}
