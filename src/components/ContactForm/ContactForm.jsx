import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

import Input from '../Input/';
import { FormItem } from './ContactForm.styled';

const INITIAL_STATE = { number: '', name: '' };

export default class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ currentTarget }) => {
    const value = currentTarget.value;
    const name = currentTarget.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.name, this.state.number);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Card>
          <FormItem>
            <label>
              Name
              <Input
                value={name}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
}
