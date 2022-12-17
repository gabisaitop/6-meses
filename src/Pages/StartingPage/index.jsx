import * as React from 'react';
import { ContainerBox } from "./style";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function StartingPage() {

  return (
    <>
      <ContainerBox>
        <div>
          <h3>QUIZUR</h3>
          <h4>DIFERENCIADO</h4>
          <p>feito pela sua estudante de react favorita</p>
          <Link to="/challenge"><button>COMEÇAR</button></Link>
        </div>
      </ContainerBox>
    </>
  );
}
