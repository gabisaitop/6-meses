import { ContainerBox } from "./style";
import * as React from 'react';
import { useState } from 'react';


export default function NotFoundPage() {
    const bananaSexy = require(`./assets/banana.jpeg`)
    const icon = require(`./assets/check.png`)

    const [answer, setAnswer] = useState('');

    const text = ["Oii você!! AAAAA você conseguiu achar o easteregg :'), gostou do lucas no universo do bananômetro?? Porque eu adoreiJDSKASDNKSA... enfim, já que você chegou aqui, para a sua surpresa final, mande o seguinte código pelo whatsapp para o número +(55)11973062026 e receba uma pequena surpresinha feita com mucho amor <3\n\nSenha: GABIEAMELHORNAMORADA404"]

    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob(text, {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "feliz_aniversario_lucsbs.txt";
        document.body.appendChild(element);
        element.click();
    };

    function checkResponse() {
        if (answer === 'calvice') {
            alert('Parabéns, acertou besta')
            downloadTxtFile()

        } else if ( answer === 'pau' || answer === 'penis' || answer === 'pinto'){
            alert('Nossa seu idiota, VSF')
            window.location.reload(false);
        } else if ( answer === 'tudo'){
            alert('Acertou, mas essa ainda não é a resposta. \n Mas, sim, eu adoro tudo em você <3')
            window.location.reload(false);
        } else {
            alert('Errou idiota!')
            window.location.reload(false);
        }
    }

    function handleResponse(e) {
        setAnswer(e.target.value.toLowerCase())
    }

    return (
        <>
            <ContainerBox>
                <img src={bananaSexy} alt="Banana Sexy" />
                <h2>404 - PAGE NOT FOUND</h2>
                <p>Você encontrou o Banucas Sexy, por favor, insira a senha para uma surpresa:</p>
                <div>
                    <input autoComplete="off" type="password" placeholder='Insira a senha do envelope' onChange={handleResponse}/>
                    <img src={icon} alt="Banana Sexy" onClick={checkResponse}/>
                </div>
            </ContainerBox>
        </>
    )
}