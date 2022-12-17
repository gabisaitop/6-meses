import React from "react";
import { useForm } from "react-hook-form";
import { TextField, ButtonSubmit, BoxContainer } from "./style";



export default function Modal(props) {

  const answer = props.answer
  const question = props.question
  const list = answer.split('');

  const listWords = []

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {

    for (let index = 0; index < list.length; index++) {
      let letra = e.target[index].value
      listWords.push(letra)
    }

    const finalWord = listWords.join('')

    if (typeof answer === 'number'? finalWord === answer : finalWord.toLowerCase() === answer.toLowerCase()) {
      props.handleClick(true)
      alert('Parabéns acertou!')
      
    } else {
      props.handleClick(false);
      alert('Besta!! Vai ter que reiniciar!')
      document.location.reload(true);
    }

  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <>
      <BoxContainer>
        <p>{question}</p>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          {
            list.map((list, index) => {
              return (
                <TextField required autoComplete="off" type="text" id={index} maxLength="1" {...register("answer")} onKeyUp={(e) => {
                }} />
              )

            })
          }

          <ButtonSubmit type="submit">CHECK</ButtonSubmit>
        </form>
      </BoxContainer>

    </>
  )

}