import React, { Component } from 'react';
import WebFont from 'webfontloader';
import styled from 'styled-components';

import Input from '../components/input';
import Button from '../components/button';
import Categories from '../components/categories';

import Lists from '../data/lists';

WebFont.load({
  google: {
    families: ['Montserrat:300,500,600,800', 'sans-serif'],
  },
});

const Home = styled('div')`
  
`;

class Landing extends Component {
  render() {
    console.log(Lists);
    return (
      <Home className="main-container fixed-button">
        <Input name="name" placeholder="Nova Categoria" />
        <Button>Adicionar</Button>
        <Categories list={Lists} />
      </Home>
    );
  }
}

export default Landing;
