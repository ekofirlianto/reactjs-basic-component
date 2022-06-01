import React from 'react';
import ClassComponent from './Pembahasan/ClassComponent';
import FunctionalComponent from './Pembahasan/FunctionalComponent';
import Header from './Pembahasan/header';

export default class Komponen extends React.Component {
  render() {
    return (
      <div className="kontainer">
        <Header />
        <ClassComponent nama="Randika Saptianda" />
        <FunctionalComponent nama="Ari Alamsyah" />
      </div>
    );
  }
}
