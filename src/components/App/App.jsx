import React, { Component } from 'react';
import { Row, Col } from 'antd';
import shortid from 'shortid';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { Container } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleSubmit = (name, number) => {
    const id = shortid.generate();

    const isContact = this.state.contacts.find(contact =>
      contact.name.includes(name),
    );

    isContact
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id, name, number }],
        }));
  };

  handleFilterChange = ({ currentTarget }) => {
    const value = currentTarget.value;
    const name = currentTarget.name;

    this.setState({
      [name]: value,
    });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      filter: ''
    }));
  };

  resetForm = () => {
    this.setState(prevState => ({
      ...prevState,
      number: '',
      name: '',
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <Row gutter={16}>
          <Col className="gutter-row" md={18} lg={10}>
            <Section title="Phonebook">
              <ContactForm onSubmit={this.handleSubmit} />
            </Section>
          </Col>

          <Col className="gutter-row" md={18} lg={20}>
            <Section title="Contacts">
              <Filter
                onChange={this.handleFilterChange}
                value={filter}
                style={{ marginBottom: 24 }}
                placeholder="Enter name"
              />

              {contacts.length ? (
                <ContactList
                  contacts={visibleContacts}
                  onDeleteUser={this.deleteContact}
                />
              ) : (
                'Phonebook is Empty '
              )}
            </Section>
          </Col>
        </Row>
      </Container>
    );
  }
}
