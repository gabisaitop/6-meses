import * as React from 'react';
import { useState } from 'react';
import Modal from '../.././Components/ModalChallenge'
import { ContainerBox } from "./style";
import { Route, Routes, useNavigate } from 'react-router-dom';

const obj = {
  'Qual o nome da música que me faz lembrar de você?': 'single',
  'Quanto você tem de altura? (em cm)': '170',
  'Onde foi nosso segundo encontro?': 'villalobos',
  'Qual foi o primeiro filme que assistimos juntos?': 'morbius',
  'Qual foi a mensagem que eu mais te mandei pelo Slack?': 'loremipsum',
  'O que aconteceu antes da primeira vez que você veio aqui em casa?': 'churrasco',
  'Do que o Henrique (o Grande) te chamou na primeira vez que comemos com ele na janta?': 'manso',
  'Onde oficializamos o nosso namoro (em Abril)?': 'Uber',
  'Onde foi nosso primeiro beijo?': 'Carrefour',
  'Quantos meses fizemos em dezembro? (escrito por extenso)': 'nove',
}

export default function Challenge() {

  const [index, setIndex] = useState(0)

  const navigate = useNavigate();

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setIndex(index+1)
      if (index === 9) {
        navigate('/home', { replace: true });
      }
    }
  };

  return (
    <ContainerBox>
        <Modal question={Object.keys(obj)[index]} answer={Object.values(obj)[index]} handleClick={handleClick}/>
    </ContainerBox>

  );
}
