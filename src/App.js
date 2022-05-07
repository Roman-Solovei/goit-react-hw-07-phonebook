
import React from 'react';
import './App.module.css';
import { useFetchContactsQuery } from './redux/contactSlice'; 
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Container from './components/Container';


export default function App() { 
  const { data } = useFetchContactsQuery();

  const contactsData = data;
       
  return (<>
    <Container>
      <h1>Phonebook</h1>
      <ContactForm contactsData={ contactsData }/>
      <h2>Contacts</h2>
      <Filter />
      <ContactList contactsData={ contactsData }/>
    </Container>
  </>);    
};
