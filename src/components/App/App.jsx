import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import shortid from 'shortid';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { Container } from './App.styled';

import { getContactsFromLocalStorage, setContactsFromLocalStorage } from '../../utils';

export default function App() {
  //STATE
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return getContactsFromLocalStorage() ?? []
  })

  //EFFECT
  useEffect(() => {
    setContactsFromLocalStorage(contacts)
  },  [contacts])

  //HANDLERS
  const handleSubmit = (name, number) => {
    const id = shortid.generate();

    const isContact = contacts.find(contact =>
      contact.name.includes(name),
    );

    isContact
      ? alert(`${name} is already in contacts`)
      : setContacts(prevState => {
          return  [...prevState, { id, name, number }]
        });
  };

  const handleFilterChange = ({ currentTarget }) => {
    const value = currentTarget.value;
    setFilter(value);
  };


  const handleDeleteContact = contactId => {
    setContacts(prevState => (
      [...prevState.filter(contact => contact.id !== contactId)]
    ));
    setFilter('');
  };

  //HELPERS
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <Container>
      <Row gutter={16}>
        <Col className="gutter-row" md={18} lg={10}>
          <Section title="Phonebook">
            <ContactForm onSubmit={handleSubmit} />
          </Section>
        </Col>

        <Col className="gutter-row" md={18} lg={20}>
          <Section title="Contacts">
            <Filter
              onChange={handleFilterChange}
              value={filter}
              style={{ marginBottom: 24 }}
              placeholder="Enter name"
            />

            {contacts.length ? (
              <ContactList
                contacts={getVisibleContacts()}
                onDeleteUser={handleDeleteContact}
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
