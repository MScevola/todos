import React, { useState } from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

import Input from "../components/input";
import Button from "../components/button";
import Categories from "../components/categories";
import ToDos from "../components/todos";

import Lists from "../data/lists";

WebFont.load({
  google: {
    families: ["Montserrat:300,500,600,800", "sans-serif"]
  }
});

const Home = styled("div")`
  background: #ededed;
`;

function Landing() {
  const [actualList] = useState(0);

  return (
    <Home>
      <Input name="name" placeholder="Nova Categoria" />
      <Button>Adicionar</Button>
      <Categories list={Lists} />
      <ToDos todos={Lists[actualList].todos} />
    </Home>
  );
}

export default Landing;
