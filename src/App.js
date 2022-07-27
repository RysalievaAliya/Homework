import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  let users = [{ 
    name: 'Jack',
    lastname: 'Grey',
    age: 29,
    id: 'first'
  },
    {
      name: 'Lore',
      lastname: 'Stevens',
      age: 42,
      id: 'second'
    },
    {
      name: 'Peter',
      lastname: 'Jackson',
      age: 25,
      id: 'third'
    },
  ]
    
  return (
    <>
      <Header />
      <Section users={users}/>
      <Footer />
    </>
  );
};

export default App;
